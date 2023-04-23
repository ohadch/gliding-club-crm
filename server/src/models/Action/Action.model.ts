import {
    Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Shift } from '../Shift';
import BaseModel from "../__abstract__/BaseModel";
import UtilsService from "../../services/utils";
import { ShiftType } from "../../@types/enums";
import {GliderReservationQueueCycle} from "../GliderReservationQueueCycle";

export const ACTION_RELATIONS = [
  'shifts',
  'shifts.action',
  'shifts.duties',
  'shifts.duties.role',
];

@Entity()
@ObjectType()
export class Action extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Date)
    @Column({ unique: true })
    date: Date;

    @Field(() => Int, { nullable: true })
    @Column({ nullable: true })
    gliderReservationQueueCycleId: number;

    @Field(() => [Shift], { nullable: true })
    @OneToMany(() => Shift, (shift) => shift.action)
    shifts: Shift[];

    @Field(() => GliderReservationQueueCycle)
    @ManyToOne(() => GliderReservationQueueCycle, (gliderReservationQueueCycle) => gliderReservationQueueCycle.actions)
    gliderReservationQueueCycle: GliderReservationQueueCycle;

    public async ensureShifts() {
      const shifts: Shift[] = [];
      try {
        this.logger.info("Attempting to ensure shifts for the action");
        if (this.date.getDay() === 5) {
          this.logger.info("Action occurs on Thursday, will ensure morning shift only");
          if (this.shifts.length >= 1) {
            return;
          }
          const shift = new Shift();
          shift.action = this;
          shift.type = ShiftType.Morning;
          await shift.save();
          shifts.push(shift);
        } else {
          const shiftTypes = UtilsService.enumStringValuesIterator(ShiftType);

          for await (const shiftType of shiftTypes) {
            const existingShiftForType = this.shifts.find(shift => shift.type === shiftType);
            if (existingShiftForType) {
              continue;
            }

            const shift = new Shift();
            shift.action = this;
            shift.type = shiftType;
            await shift.save();
            shifts.push(shift);
          }
        }

        const promises = shifts.map(shift => shift.ensureDuties());
        return Promise.all(promises);
      } catch (e: any) {
        this.logger.error(`Failed to ensure shifts for action: ${e.message}`);
        throw e;
      }
    }

    public static async getByYear(year: number) {
      const actions = await Action.find({
        relations: ACTION_RELATIONS,
      });

      return actions.filter(action => action.date.getFullYear() === year);
    }
}
