import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique,
} from 'typeorm';
import {
    Field, Int, ObjectType,
} from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import {Member} from '../Member';
import {GlidersReservationQueueCycle} from "../GlidersReservationQueueCycle";

export const GLIDERS_RESERVATION_QUEUE_CYCLE_MEMBER_RANK_RELATIONS = [
    'member',
];

@Entity()
@Unique(['memberId', 'rank'])
@ObjectType()
export class GlidersReservationQueueCycleMemberRank extends BaseModel {
    @Field(
        () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column()
    rank: number;

    @Field(() => Int)
    @Column()
    memberId: number;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member)
    @JoinColumn({ name: 'memberId' })
    member: Member;

    @Field(() => Int)
    @Column()
    queueId: number;

    @Field(() => GlidersReservationQueueCycle, { nullable: true })
    @ManyToOne(() => GlidersReservationQueueCycle)
    @JoinColumn({ name: 'queueId' })
    cycle: GlidersReservationQueueCycle;
}
