import {
    Column,
    Entity, OneToMany, PrimaryGeneratedColumn, Unique,
} from 'typeorm';
import {
    Field, Int, ObjectType,
} from 'type-graphql';
import BaseModel from "../__abstract__/BaseModel";
import {GlidersReservationQueueCycleMemberRank} from "../GlidersReservationQueueCycleMemberRank";


@Entity()
@Unique(['rankInCyclesOrder'])
@ObjectType()
export class GlidersReservationQueueCycle extends BaseModel {
    @Field(
        () => Int,
    )
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => [GlidersReservationQueueCycleMemberRank], { nullable: true })
    @OneToMany(() => GlidersReservationQueueCycleMemberRank, rank => rank.cycle)
    memberRanks: GlidersReservationQueueCycleMemberRank[];

    @Field(() => Int)
    @Column()
    rankInCyclesOrder: number;
}
