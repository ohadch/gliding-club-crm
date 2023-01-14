import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Member } from '../Member';
import BaseModel from "../__abstract__/BaseModel";
import {MemberAssignmentPreferenceType} from "../../@types/enums";
import {Duty} from "../Duty";
import * as Moment from 'moment';

import { extendMoment } from 'moment-range';
import {Shift} from "../Shift";

const moment = extendMoment(Moment);

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
    otherMemberId: number;

    @Field(() => Date, { nullable: true })
    @Column({ nullable: true })
    startDate: Date;

    @Field(() => Date, { nullable: true })
    @Column({ nullable: true })
    endDate: Date;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.preferences)
    @JoinColumn({ name: 'memberId' })
    member: Member;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.preferencesAsOtherMember)
    @JoinColumn({ name: 'otherMemberId' })
    otherMember: Member;

    @Field(() => MemberAssignmentPreferenceType)
    @Column()
    type: string;


    public isApplicableToDuty(duty: Duty) {
        return this.isApplicableToShift(duty.shift)
    }

    public isApplicableToShift(shift: Shift) {
        if (this.startDate && this.endDate) {
            return moment.range(moment(this.startDate), moment(this.endDate)).contains(shift.action.date)
        }

        if (this.startDate) {
            return moment(this.startDate).isSame(shift.action.date, "day")
        }

        return true
    }
}
