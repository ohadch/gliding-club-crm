import {
  Column,
  Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import { Member } from "../Member";

@Entity()
@ObjectType()
export class GliderReservationQueueSpacingGroup extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => [Member], { nullable: true })
    @OneToMany(() => Member, (member) => member.gliderReservationQueueSpacingGroup)
    members: Member[];
}
