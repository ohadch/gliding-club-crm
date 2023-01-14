import { Field, InputType, Int } from 'type-graphql';
import { Duty } from './Duty.model';

@InputType()
export class CreateDutyInput implements Partial<Duty> {
    @Field(() => Int)
    memberId: number;

    @Field(() => Int)
    shiftId: number;

    @Field(() => Int)
    roleId: number;
}

@InputType()
export class UpdateDutyInput implements Partial<Duty> {
    @Field(() => Int, { nullable: true })
    memberId: number;

    @Field(() => Int, { nullable: true })
    shiftId: number;

    @Field(() => Int, { nullable: true })
    roleId: number;
}
