import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Member } from '../Member';
import BaseModel from "../__abstract__/BaseModel";
import { Glider } from "../Glider";

export const ENDORSEMENT_RELATIONS = [
  'members',
  'gliders',
];

@Entity()
@ObjectType()
export class Endorsement extends BaseModel {
    @Field(
      () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @RelationId((endorsement: Endorsement) => endorsement.member)
    @Column()
    memberId: number;

    @RelationId((endorsement: Endorsement) => endorsement.glider)
    @Column()
    gliderId: number;

    @Field(() => Date, { nullable: true })
    @Column({ nullable: true })
    startDate?: Date;

    @Field(() => Date, { nullable: true })
    @Column({ nullable: true })
    endDate?: Date;

    @Field(() => Member, { nullable: true })
    @ManyToOne(() => Member, (member) => member.endorsements)
    @JoinColumn({ name: 'memberId' })
    member: Member;

    @Field(() => Glider, { nullable: true })
    @ManyToOne(() => Glider, (glider) => glider.endorsements)
    @JoinColumn({ name: 'gliderId' })
    glider: Glider;
}
