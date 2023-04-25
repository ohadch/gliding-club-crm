import {
    Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import {
    Field, Int, ObjectType,
} from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import {Member} from '../Member';
import {Endorsement} from "../Endorsement";

export const GLIDER_RELATIONS = [
    'owners',
    'endorsements',
    'endorsements.member',
    'endorsements.glider',
];

@Entity()
@ObjectType()
export class Glider extends BaseModel {
    @Field(
        () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column({unique: true})
    callSign: string;

    @Field(() => Int, {nullable: true})
    @Column({nullable: true})
    numSeats: number;

    @Field(() => Int, {nullable: true})
    @Column({nullable: true})
    type: number;

    @Field(() => [Member], {nullable: true})
    @ManyToMany(() => Member, member => member.ownedGliders)
    @JoinTable()
    owners: Member[]

    @Field(() => [Endorsement], {nullable: true})
    @OneToMany(() => Endorsement, endorsement => endorsement.glider)
    endorsements: Endorsement[]

}
