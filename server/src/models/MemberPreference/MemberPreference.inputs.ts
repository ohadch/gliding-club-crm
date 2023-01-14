import { Field, InputType, Int } from 'type-graphql';
import { MemberPreference } from './MemberPreference.model';
import {MemberAssignmentPreferenceType} from "../../@types/enums";

@InputType()
export class CreateMemberPreferenceInput implements Partial<MemberPreference> {
    @Field(() => Int)
    memberId: number;

    @Field(() => Int, { nullable: true })
    otherMemberId: number;

    @Field(() => Date, { nullable: true })
    startDate: Date;

    @Field(() => Date, { nullable: true })
    endDate: Date;

    @Field(() => MemberAssignmentPreferenceType)
    type: MemberAssignmentPreferenceType;
}
