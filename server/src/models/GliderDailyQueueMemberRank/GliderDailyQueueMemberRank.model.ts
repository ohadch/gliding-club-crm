import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique,
} from 'typeorm';
import {
    Field, Int, ObjectType,
} from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import {Member} from '../Member';
import {Glider} from "../Glider";

export const GLIDER_DAILY_QUEUE_MEMBER_RANK_RELATIONS = [
    'member',
    'glider'
];

@Entity()
@Unique(['gliderId', 'date'])
@ObjectType()
export class GliderDailyQueueMemberRank extends BaseModel {
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

    @Field(() => Date)
    @Column()
    date: Date;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member)
    @JoinColumn({ name: 'memberId' })
    member: Member;

    @Field(() => Int)
    @Column()
    gliderId: number;

    @Field(() => Glider, { nullable: true })
    @ManyToOne(() => Glider)
    @JoinColumn({ name: 'gliderId' })
    glider: Glider;

}
