import {
  Column,
  Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import { Member } from "../Member";
import { GliderReservationQueueCycle } from "../GliderReservationQueueCycle";

export const GLIDER_RESERVATION_QUEUE_CYCLE_MEMBER_NUMBER_RELATIONS = [
  'member',
  'gliderReservationQueueCycle',
];

@Entity()
@ObjectType()
export class GliderReservationQueueCycleMemberNumber extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column()
    number: number;

    @Field(() => Int)
    @Column()
    memberId: number;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.duties, { nullable: true })
    @JoinColumn({ name: 'memberId' })
    member: Member | null;

    @Field(() => Int)
    @Column()
    gliderReservationQueueCycleId: number;

    @Field(() => GliderReservationQueueCycle)
    @ManyToOne(() => GliderReservationQueueCycle, (cycle) => cycle.membersNumbers)
    @JoinColumn({ name: 'gliderReservationQueueCycleId' })
    gliderReservationQueueCycle: GliderReservationQueueCycle;
}
