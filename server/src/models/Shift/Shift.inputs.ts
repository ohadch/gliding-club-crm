import { Field, InputType, Int } from 'type-graphql';
import { Shift } from './Shift.model';
import { ShiftType } from "../../@types/enums";

@InputType()
export class CreateShiftInput implements Partial<Shift> {
    @Field(() => ShiftType)
    type: ShiftType;

    @Field(() => Int)
    actionId: number;
}

@InputType()
export class UpdateShiftInput implements Partial<Shift> {
    @Field(() => ShiftType, { nullable: true })
    type: ShiftType;
}
