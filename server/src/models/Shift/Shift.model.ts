import {
  Column,
  Entity, JoinColumn, ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Duty } from '../Duty';
import { Action } from '../Action';
import BaseModel from "../__abstract__/BaseModel";
import { ShiftType } from "../../@types/enums";

export const SHIFT_RELATIONS = [
  'action',
  'duties',
  'duties.role',
  'duties.member',
];

/* eslint-disable no-unused-vars */
enum RoleId {
    ResponsibleInstructor = 1,
    TowPilot = 2,
    FieldResponsible = 3,
    Maintenance = 4
}
/* eslint-enable no-unused-vars */

@Entity()
@ObjectType()
export class Shift extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column()
    actionId: number;

    @Field(() => [Duty], { nullable: true })
    @OneToMany(() => Duty, (duty) => duty.shift)
    duties: Duty[];

    @Field(() => Action)
    @ManyToOne(() => Action)
    @JoinColumn({ name: 'actionId' })
    action: Action;

    @Field(() => ShiftType)
    @Column()
    type: string;

    public async ensureDuties() {
      this.logger.info("Ensuring duties for shift");

      try {
        const dutiesPromises : Array<Promise<any>> = [
          Duty.create({
            shiftId: this.id,
            roleId: RoleId.ResponsibleInstructor,
          }).save(),
          Duty.create({
            shiftId: this.id,
            roleId: RoleId.FieldResponsible,
          }).save(),
          Duty.create({
            shiftId: this.id,
            roleId: RoleId.TowPilot,
          }).save(),
        ];

        if (this.action.date.getDay() === 5) {
          this.logger.info('Adding maintenance persons because the shift occurs on Thursday');

          const maintenancePersonsPromises : Array<Promise<any>> = [
            Duty.create({
              shiftId: this.id,
              roleId: RoleId.Maintenance,
            }).save(),
            Duty.create({
              shiftId: this.id,
              roleId: RoleId.Maintenance,
            }).save(),
          ];
          dutiesPromises.push(...maintenancePersonsPromises);
        }

        this.logger.info(`Creating ${dutiesPromises.length} duties`);
        await Promise.all(dutiesPromises);

        return this.save();
      } catch (e: any) {
        this.logger.error(`Failed to ensure duties for shift: ${e.message}`);
        throw e;
      }
    }
}
