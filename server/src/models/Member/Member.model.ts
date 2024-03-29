import {
  Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Role } from '../Role';
import { Duty } from '../Duty';
import { MemberPreference } from '../MemberPreference';
import BaseModel from "../__abstract__/BaseModel";
import {getDaysDiff} from "../../services/utils/date.utils";
import {Glider} from "../Glider";

export const MEMBER_RELATIONS = [
  'roles',
  'duties',
  'duties.role',
  'duties.shift',
  'duties.shift.action',
  'preferences',
];

const DAYS_DIFF_WITH_CLOSEST_DUTY_IN_CASE_MEMBER_IS_NOT_ASSIGNED_AT_ALL = 100000;

@Entity()
@ObjectType()
export class Member extends BaseModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  mobilePhone: string;

  @Field(() => [Role], { nullable: true })
  @ManyToMany(() => Role, (role) => role.qualifiedMembers)
  @JoinTable()
  roles: Role[]

  @Field(() => [Duty], { nullable: true })
  @OneToMany(() => Duty, (duty) => duty.member)
  duties: Duty[];

  @Field(() => [MemberPreference], { nullable: true })
  @OneToMany(() => MemberPreference, (preference) => preference.member)
  preferences: MemberPreference[];

  @Field(() => [MemberPreference], { nullable: true })
  @OneToMany(() => MemberPreference, (preference) => preference.otherMember)
  preferencesAsOtherMember: MemberPreference[];

  @Field(() => [Glider], { nullable: true })
  @ManyToMany(() => Glider, (glider) => glider.owners)
  ownedGliders: Glider[]

  @Field(() => String)
  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public async getDaysDiffBetweenDateAndClosestDuty(date: Date) {
    const duties = await Duty.find({
      where: {
        memberId: this.id,
      },
      relations: [
        'shift',
        'shift.action',
      ],
    });

    if (duties.length === 0) {
      return DAYS_DIFF_WITH_CLOSEST_DUTY_IN_CASE_MEMBER_IS_NOT_ASSIGNED_AT_ALL;
    }

    const daysDiffs = duties.map(duty => getDaysDiff(date, duty.shift.action.date));

    return Math.min(
      ...daysDiffs,
    );
  }
}
