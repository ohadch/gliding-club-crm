import {
  Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import {
  Field, Int, ObjectType,
} from 'type-graphql';
import { Member } from '../Member';
import { Duty } from '../Duty';
import BaseModel from "../__abstract__/BaseModel";

export const ROLE_RELATIONS = [
  'qualifiedMembers',
  'duties',
  'duties.member',
  'duties.role',
  'duties.shift',
  'duties.shift.action',
];

@Entity()
@ObjectType()
export class Role extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column({ unique: true })
    name: string;

    @Field(() => [Member], { nullable: true })
    @ManyToMany(() => Member, (member) => member.roles)
    qualifiedMembers: Member[];

    @Field(() => [Duty], { nullable: true })
    @OneToMany(() => Duty, (duty) => duty.role)
    duties: Duty[];
}
