import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId,} from 'typeorm';
import {Field, Int, ObjectType} from 'type-graphql';
import {Member, MEMBER_RELATIONS} from '../Member';
import {Shift} from '../Shift';
import {Role} from '../Role';
import {MEMBER_PREFERENCE_RELATIONS, MemberPreference} from '../MemberPreference';
import {getLogger} from '../../services/logging';
import UtilsService from '../../services/utils';
import {Action} from '../Action';
import BaseModel from '../__abstract__/BaseModel';
import {MemberAssignmentPreferenceType} from "../../@types/enums";


export const DUTY_RELATIONS = [
  'shift',
  'shift.action',
  'member',
  'role',
  'role.qualifiedMembers',
  'role.qualifiedMembers.duties',
];

@Entity()
@ObjectType()
export class Duty extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @RelationId((duty: Duty) => duty.member)
    @Column({ nullable: true })
    memberId: number | null;

    @RelationId((duty: Duty) => duty.shift)
    @Column({ nullable: true })
    shiftId: number;

    @RelationId((duty: Duty) => duty.role)
    @Column({ nullable: true })
    roleId: number;

    @Field(() => Shift)
    @ManyToOne(() => Shift, (shift) => shift.duties)
    @JoinColumn({ name: 'shiftId' })
    shift: Shift;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.duties, { nullable: true })
    @JoinColumn({ name: 'memberId' })
    member: Member | null;

    @Field(() => Role)
    @ManyToOne(() => Role, (role) => role.duties)
    @JoinColumn({ name: 'roleId' })
    role: Role;

    public getPreferences(preferences: MemberPreference[]) {
      return {
        duty: this,
        unavailableMembers: preferences
            .filter(preference => preference.type === MemberAssignmentPreferenceType.Unavailable)
            .filter(preference => preference.isApplicableToDuty(this)),
        membersThatSpecificallyRequestDuty: preferences
            .filter(preference => preference.type === MemberAssignmentPreferenceType.RequestSpecific)
            .filter(preference => preference.isApplicableToDuty(this))
      }
    }

    public static async getDutiesQueueForAssignment() {
      const dutiesAssignmentQueue: Array<Duty> = [];

      // Fetch all duties
      let unassignedDuties = await Duty.find({
        where: {
          memberId: null,
        },
        relations: DUTY_RELATIONS,
      });

      getLogger().info(`Found ${unassignedDuties.length} unassigned duties`);

      const preferences = await MemberPreference.find({
        relations: MEMBER_PREFERENCE_RELATIONS,
      });

      const dutiesStats = unassignedDuties.map((duty) => duty.getPreferences(preferences));

      // Find and assign the most problematic duties (those that some members are unavailable for them)
      // Duty is considered more problematic if more members are unavailable for it
      // Assigning the duties that have the most unavailable members first
      const possibleNumsOfUnavailableMembers = [...new Set(dutiesStats.map((stats) => stats.unavailableMembers.length))].sort((a, b) => (a < b ? 1 : -1));

      possibleNumsOfUnavailableMembers.forEach((numOfUnavailableMembers) => {
        const dutiesWithNumOfUnavailableMembers = dutiesStats.filter((stats) => stats.unavailableMembers.length === numOfUnavailableMembers).map((stats) => stats.duty);
        dutiesWithNumOfUnavailableMembers.forEach((duty) => {
          dutiesAssignmentQueue.push(duty);
          unassignedDuties = unassignedDuties.filter((_duty) => _duty.id !== duty.id);
        });
      });

      // Then assign the duties that are explicitly requested by members
      // Assigning the duties that have less requesting members first, but does not assign duties that do not have explicit requests
      const possibleNumsOfRequestingMembers = [...new Set(dutiesStats.map((stats) => stats.membersThatSpecificallyRequestDuty.length))].sort((a, b) => (a > b ? 1 : -1));
      possibleNumsOfRequestingMembers.forEach((numOfRequestingMembers) => {
        const dutiesWithNumOfUnavailableMembers = dutiesStats.filter((stats) => stats.membersThatSpecificallyRequestDuty.length === numOfRequestingMembers).map((stats) => stats.duty);
        dutiesWithNumOfUnavailableMembers.forEach((duty) => {
          dutiesAssignmentQueue.push(duty);
          unassignedDuties = unassignedDuties.filter((_duty) => _duty.id !== duty.id);
        });
      });

      // Then assign the rest of the duties
      unassignedDuties.forEach((duty) => {
        dutiesAssignmentQueue.push(duty);
        unassignedDuties = unassignedDuties.filter((_duty) => _duty.id !== duty.id);
      });

      return dutiesAssignmentQueue;
    }

    public static async assignAllUnassignedDuties() {
      getLogger().info('Will attempt to assign the unassigned duties');

      const dutiesQueue = await Duty.getDutiesQueueForAssignment();
      const errors: string[] = [];

      for await (const duty of dutiesQueue) {
        try {
          await duty.assignFittestMember();
        } catch (e: any) {
          errors.push(`Duty ${duty.id}: ${e.message}`);
        }
      }

      return { success: !errors.length, errors: errors.length ? errors : undefined };
    }

    public async getUnavailableMembers() {
      const actionId = this.shift.action.id;

      const preferences = await MemberPreference.find({
        relations: MEMBER_PREFERENCE_RELATIONS
      });
      const preferencesOfUnavailableMembers = preferences.filter(preference => preference.isApplicableToShift(this.shift))
      const unavailableMembersDueToPreference = preferencesOfUnavailableMembers.map((preference) => preference.member);

      if (unavailableMembersDueToPreference.length) {
        getLogger().info(`${unavailableMembersDueToPreference.length} members are unavailable for duty ${this.id} due to preference: ${unavailableMembersDueToPreference.map((member) => member.id).join(', ')}`);
      }

      const action = await Action.findOne(actionId, {
        relations: [
          'shifts',
          'shifts.duties',
          'shifts.duties.member',
        ],
      });

      if (!action) {
        throw new Error(`Action with id ${actionId} was not found`);
      }

      const unavailableMembersDueToExistingAssignment = action.shifts
        .map((shift) => shift.duties)
        .reduce((a, b) => [...a, ...b], [])
        .map((duty) => duty.member)
        .filter((member) => Boolean(member)) as Member[];

      if (unavailableMembersDueToExistingAssignment.length) {
        getLogger().info(`${unavailableMembersDueToPreference.length} members are unavailable for duty ${this.id} due to existing assignment: ${unavailableMembersDueToExistingAssignment.map((member) => member.id).join(', ')}`);
      }

      const role = await Role.findOne(this.roleId, {
        relations: [
          'qualifiedMembers',
        ],
      });

      if (!role) {
        throw new Error(`Role with id ${this.roleId} was not found`);
      }

      getLogger().info(`${role.qualifiedMembers.length} members are qualified for role ${role.id}: ${role.qualifiedMembers.map((member) => member.id).join(', ')}`);

      const unavailableMemberIds = [...new Set([
        ...unavailableMembersDueToPreference.map((member) => member.id),
        ...unavailableMembersDueToExistingAssignment.map((member) => member.id),
      ])];

      const promises = unavailableMemberIds.map((id) => Member.findOne(id, {
        relations: MEMBER_RELATIONS,
      }));

      const members = await Promise.all(promises);
      const unavailableMembers = members.filter((member) => Boolean(member)) as Member[];

      getLogger().info(`Overall, ${unavailableMembers.length} members are unavailable for duty ${this.id}: ${unavailableMemberIds.join(', ')}`);

      return unavailableMembers;
    }

    public async getAvailableMembers() {
      const unavailableMembers = await this.getUnavailableMembers();
      const unavailableMemberIds = unavailableMembers.map((member) => member.id);

      const role = await Role.findOne(this.roleId, {
        relations: [
          'qualifiedMembers',
        ],
      });

      if (!role) {
        throw new Error(`Role with id ${this.roleId} was not found`);
      }

      const availableMembers = role.qualifiedMembers
        .filter((member) => !unavailableMemberIds.includes(member.id));

      getLogger().info(`Overall, ${availableMembers.length} are available for duty ${this.id}: ${availableMembers.map((member) => member.id).join(', ')}`);

      return availableMembers;
    }

    public async assignFittestMember() {
      try {
        getLogger().info(`Assigning duty ${this.id} of role ${this.role.name} belonging to ${this.shift.type} shift of ${this.shift.action.date.toISOString()}`);

        const availableMembers = await this.getAvailableMembers();
        if (!availableMembers.length) {
          throw new Error(`All of the members are unavailable for duty ${this.id}`);
        }

        const daysDiffsResults : Array<{ memberId: number, daysDiff: number }> = [];

        const daysDiffsPromises = availableMembers.map(async (member) => {
          const daysDiff = await member.getDaysDiffBetweenDateAndClosestDuty(this.shift.action.date);
          daysDiffsResults.push({ memberId: member.id, daysDiff });
        });

        await Promise.all(daysDiffsPromises);

        const maxDaysDiffToDuty = Math.max(...daysDiffsResults.map((result) => result.daysDiff));
        const membersThatTheirDutiesAreTheFurthest = daysDiffsResults.filter((result) => result.daysDiff === maxDaysDiffToDuty);
        getLogger().info(`The members with the furthest duties are ${membersThatTheirDutiesAreTheFurthest.map((result) => result.memberId).join(', ')} with ${maxDaysDiffToDuty} days between the duty's date and their closest duty`);

        // Randomly picks a member
        const fittestMemberId = UtilsService.randomChoice(membersThatTheirDutiesAreTheFurthest).memberId;
        const fittestMember = await Member.findOne(fittestMemberId);
        if (!fittestMember) {
          throw new Error(`Member with id ${fittestMemberId} was not found`);
        }

        getLogger().info(`Fittest member for duty ${this.id} ${this.role.name} is ${fittestMember.id} ${fittestMember.fullName}`);

        this.member = fittestMember;
        return this.save();
      } catch (e) {
        getLogger().error(e);
        throw e;
      }
    }
}
