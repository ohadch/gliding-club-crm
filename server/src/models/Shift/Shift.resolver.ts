import {Arg, Mutation, Query, Resolver,} from 'type-graphql';
import * as _ from "lodash";
import {Shift, SHIFT_RELATIONS} from './Shift.model';
import {CreateShiftInput, UpdateShiftInput} from './Shift.inputs';
import {getLogger} from "../../services/logging";
import {ShiftType} from "../../@types/enums";

@Resolver()
export class ShiftResolver {
    @Query(() => Shift, { nullable: true })
  async shift(@Arg('id') id: number) {
    return Shift.findOne(id, {
      relations: SHIFT_RELATIONS,
    });
  }

    @Query(() => [Shift])
    async shifts(@Arg("page") page: number) {
      const entriesPerPage = 10;
      const shifts = await Shift.find({
        relations: SHIFT_RELATIONS,

      }).then(_shifts => {
        return _shifts.sort((a, b) => {
          if (a.action.date > b.action.date) {
            return 1
          }

          if (a.action.date < b.action.date) {
            return -1
          }

          if (a.type === ShiftType.Morning) {
            return -1
          }

          return 1

        })
      });

      const pages = _.chunk(shifts, entriesPerPage);
      return pages[page - 1] || [];
    }

    @Mutation(() => Shift)
    async createShift(@Arg('data') data: CreateShiftInput) {
      getLogger().info(`Creating new shift: ${JSON.stringify(data)}`);

      const shift = Shift.create(data);
      await shift.save();

      await shift.ensureDuties();

      return Shift.findOne(shift.id, {
        relations: SHIFT_RELATIONS,
      });
    }

    @Mutation(() => Shift)
    async updateShift(@Arg('id') id: number, @Arg('data') data: UpdateShiftInput) {
      getLogger().info(`Updating shift ${id}: ${JSON.stringify(data)}`);

      const shift = await Shift.findOne(id);
      if (!shift) throw new Error('Entity not found');
      Object.assign(shift, data);
      await shift.save();
      return Shift.findOne(shift.id, {
        relations: SHIFT_RELATIONS,
      });
    }

    @Mutation(() => Boolean)
    async deleteShift(@Arg('id') id: number) {
      getLogger().info(`Deleting shift ${id}`);

      const shift = await Shift.findOne(id, {
        relations: SHIFT_RELATIONS,
      });
      if (!shift) throw new Error('Entity not found');

      const dutiesDeletionPromises = shift.duties.map((duty) => duty.remove());
      await Promise.all(dutiesDeletionPromises);

      await shift.remove();

      return true;
    }
}
