import { Field, InputType } from 'type-graphql';
import { Role } from './Role.model';

@InputType()
export class CreateRoleInput implements Partial<Role> {
    @Field()
    name: string;
}

@InputType()
export class UpdateRoleInput implements Partial<Role> {
    @Field({ nullable: true })
    name: string;
}
