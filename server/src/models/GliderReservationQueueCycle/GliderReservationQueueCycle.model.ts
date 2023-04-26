import {
  Column,
  Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import { GliderReservationQueueCycleMemberNumber } from "../GliderReservationQueueCycleMemberNumber";

@Entity()
@ObjectType()
export class GliderReservationQueueCycle extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column({ unique: true })
    name: string;

    @Field(() => [GliderReservationQueueCycleMemberNumber])
    @OneToMany(() => GliderReservationQueueCycleMemberNumber, (member) => member.gliderReservationQueueCycle)
    membersNumbers: GliderReservationQueueCycleMemberNumber[];
}
