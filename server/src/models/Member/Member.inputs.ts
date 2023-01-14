import { Field, InputType, Int } from 'type-graphql';
import { Member } from './Member.model';

@InputType()
export class CreateMemberInput implements Partial<Member> {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field(() => [Int], { nullable: true })
    qualificationIds: number[]

    @Field(() => [String], { nullable: true })
    authId: string;
}

@InputType()
export class UpdateMemberInput implements Partial<Member> {
    @Field({ nullable: true })
    firstName: string;

    @Field({ nullable: true })
    lastName: string;

    @Field({ nullable: true })
    email: string;

    @Field(() => [Int], { nullable: true })
    qualificationIds: number[]

    @Field(() => [String], { nullable: true })
    authId: string;
}
