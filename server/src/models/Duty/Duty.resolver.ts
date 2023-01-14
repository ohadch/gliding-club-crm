import {
    Resolver, Query, Arg, Mutation,
} from 'type-graphql';
import {Duty, DUTY_RELATIONS} from './Duty.model';
import {CreateDutyInput, UpdateDutyInput} from './Duty.inputs';
import {getLogger} from "../../services/logging";
import {ShiftType} from "../../@types/enums";
import * as _ from "lodash"

@Resolver()
export class DutyResolver {
    @Query(() => [Duty])
    async duties(@Arg("page") page: number) {
        const entriesPerPage = 10;

        const duties = await Duty.find({
            relations: DUTY_RELATIONS,
        }).then(duties => duties.sort((a, b) => {
            if (a.shift?.action.date > b.shift?.action.date) {
                return 1
            }

            if (a.shift?.action.date < b.shift?.action.date) {
                return -1
            }

            if (a.shift?.type === ShiftType.Noon) {
                return 1
            }

            return -1
        }))

        const pages = _.chunk(duties, entriesPerPage);
        return pages[page - 1] || [];
    }

    @Mutation(() => Boolean)
    async assignAllUnassignedDuties() {
        try {
            await Duty.assignAllUnassignedDuties();
            return true;
        } catch (e: any) {
            getLogger().error(e);
            getLogger().error(`Assignment process failed: ${e.message}`);
            throw e;
        }
    }

    @Mutation(() => Boolean)
    async assignSingleUnassignedDuty() {
        try {
            const queue = await Duty.getDutiesQueueForAssignment();
            const duty = queue.shift();

            if (!duty) {
                getLogger().info('No remaining unassigned duties.');
                return true;
            }

            await duty.assignFittestMember();
            return true;
        } catch (e: any) {
            getLogger().error(e);
            getLogger().error(`Assignment process failed: ${e.message}`);
            throw e;
        }
    }

    @Mutation(() => Boolean)
    async unassignAllDuties() {
        getLogger().info('Unassigning all duties');

        try {
            const duties = await Duty.find();
            const promises = duties.map((duty) => {
                duty.member = null;
                return duty.save();
            });

            await Promise.all(promises);
            return true;
        } catch (e: any) {
            getLogger().error(e);
            getLogger().error(`Assignment process failed: ${e.message}`);
            throw e;
        }
    }

    @Query(() => [Duty])
    async dutiesInShift(@Arg('shiftId') shiftId: number) {
        return Duty.find({
            where: {
                shiftId,
            },
            relations: DUTY_RELATIONS,
        });
    }

    @Mutation(() => Duty)
    async createDuty(@Arg('data') data: CreateDutyInput) {
        const duty = Duty.create(data);
        await duty.save();
        return Duty.findOne(duty.id, {
            relations: DUTY_RELATIONS,
        });
    }

    @Mutation(() => Duty)
    async updateDuty(@Arg('id') id: number, @Arg('data') data: UpdateDutyInput) {
        const duty = await Duty.findOne(id);
        if (!duty) throw new Error('Entity not found');
        Object.assign(duty, data);
        await duty.save();
        return Duty.findOne(duty.id, {
            relations: DUTY_RELATIONS,
        });
    }

    @Mutation(() => Boolean)
    async deleteDuty(@Arg('id') id: number) {
        const duty = await Duty.findOne(id);
        if (!duty) throw new Error('Entity not found');
        await duty.remove();
        return true;
    }
}
