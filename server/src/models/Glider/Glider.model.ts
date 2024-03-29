import {
    Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import {
    Field, Int, ObjectType,
} from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import {Member} from '../Member';

export const GLIDER_RELATIONS = [
    'owners',
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
}
