import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Member } from '../Member';
import BaseModel from "../__abstract__/BaseModel";


export const MEMBER_DAILY_RANK_IN_GLIDER_RESERVATION_QUEUE_RELATIONS = [
    'member',
];

@Entity()
@ObjectType()
export class MemberDailyRankInGliderReservationQueue extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @RelationId((rank: MemberDailyRankInGliderReservationQueue) => rank.member)
    @Column()
    memberId: number;


    @Field(() => Date, { nullable: true })
    @Column({ nullable: true })
    date?: Date;


    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.preferences)
    @JoinColumn({ name: 'memberId' })
    member: Member;

    @Field(() => Int)
    @Column()
    rank: number;

}
