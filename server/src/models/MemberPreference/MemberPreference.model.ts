import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Member } from '../Member';
import BaseModel from "../__abstract__/BaseModel";
import {MemberAssignmentPreferenceType} from "../../@types/enums";
import {Duty} from "../Duty";
import {Shift} from "../Shift";
import {areTwoDatesTheSameDay, isDateInRange} from "../../services/utils/date.utils";

export const MEMBER_PREFERENCE_RELATIONS = [
  'member',
  'otherMember',
];

@Entity()
@ObjectType()
export class MemberPreference extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @RelationId((memberPreference: MemberPreference) => memberPreference.member)
    @Column()
    memberId: number;

    @RelationId((memberPreference: MemberPreference) => memberPreference.otherMember)
    @Column({ nullable: true })
    otherMemberId?: number;

    @Field(() => Date, { nullable: true })
    @Column({ nullable: true })
    startDate?: Date;

    @Field(() => Date, { nullable: true })
    @Column({ nullable: true })
    endDate?: Date;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.preferences)
    @JoinColumn({ name: 'memberId' })
    member: Member;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.preferencesAsOtherMember)
    @JoinColumn({ name: 'otherMemberId' })
    otherMember?: Member;

    @Field(() => MemberAssignmentPreferenceType)
    @Column()
    type: string;

    public isApplicableToDuty(duty: Duty) {
        return this.isApplicableToShift(duty.shift)
    }

    public isApplicableToShift(shift: Shift) {
        if (this.startDate && this.endDate) {
            return isDateInRange(shift.action.date, this.startDate, this.endDate)
        }

        if (this.startDate) {
            return areTwoDatesTheSameDay(this.startDate, shift.action.date)
        }

        return true
    }
}
