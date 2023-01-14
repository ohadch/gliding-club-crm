import {
  Resolver, Query, Arg, Mutation, Ctx,
} from 'type-graphql';
import { CreateMemberInput, UpdateMemberInput } from './Member.inputs';
import { Member, MEMBER_RELATIONS } from './Member.model';
import { Role } from '../Role';
import { getLogger } from '../../services/logging';
import { Context } from '../../lib/context';
import * as _ from "lodash";

const log = getLogger('member');

@Resolver()
export class MemberResolver {
  @Query(() => Member)
  async member(@Arg('id') id: number) {
    try {
      return await Member.findOne(id, {
        relations: MEMBER_RELATIONS,
      });
    } catch (e) {
      log.error(e);
      throw e;
    }
  }

  @Query(() => [Member])
  async members(@Arg("page") page: number) {
    const entriesPerPage = 10;

    const members = await Member.find({
      relations: MEMBER_RELATIONS,
    }).then(members => members.sort((a, b) => a.fullName > b.fullName ? 1 : -1));

    const pages = _.chunk(members, entriesPerPage);
    return pages[page - 1] || [];
  }

  @Mutation(() => Member)
  async createMember(
    @Arg('data') data: CreateMemberInput,
    @Ctx() ctx: Context,
  ) {
    ctx.allowOnlyAdmin()
    log.info(`Creating new member: ${JSON.stringify(data)}`);
    const member = Member.create(data);

    if (data.qualificationIds) {
      member.roles = member.roles || [];
      for await (const roleId of data.qualificationIds) {
        const role = await Role.findOne(roleId);
        if (role) {
          member.roles.push(role);
        }
      }
      await member.save();
    }

    return Member.findOne(member.id, {
      relations: MEMBER_RELATIONS,
    });
  }

  @Mutation(() => Member)
  async updateMember(
    @Arg('id') id: number,
    @Arg('data') data: UpdateMemberInput,
    @Ctx() ctx: Context,
  ) {
    ctx.allowOnlyAdmin()
    log.info(`Updating member ${id}: ${JSON.stringify(data)}`);
    const member = await Member.findOne(id);
    if (!member) throw new Error('Member not found');
    Object.assign(member, data);
    await member.save();
    return Member.findOne(id, {
      relations: MEMBER_RELATIONS,
    });
  }

  @Mutation(() => Boolean)
  async deleteMember(
    @Arg('id') id: number,
    @Ctx() ctx: Context,
  ) {
    ctx.allowOnlyAdmin()
    const member = await Member.findOne({ where: { id } });
    if (!member) throw new Error('Member not found');
    await member.remove();
    return true;
  }

  @Mutation(() => Member)
  async addRoleToMember(
    @Arg('id') id: number,
    @Arg('roleId') roleId: number,
    @Ctx() ctx: Context,
  ) {
    ctx.allowOnlyAdmin()
    const member = await Member.findOne(id, {
      relations: MEMBER_RELATIONS,
    });
    if (!member) throw new Error('Member not found');
    const role = await Role.findOne(roleId);
    if (!role) throw new Error('ShiftDutyRole not found');

    member.roles.push(role);
    await member.save();

    return Member.findOne(id, {
      relations: MEMBER_RELATIONS,
    });
  }

  @Mutation(() => Member)
  async deleteRoleFromMember(
    @Arg('id') id: number,
    @Arg('roleId') roleId: number,
    @Ctx() ctx: Context,
  ) {
    ctx.allowOnlyAdmin()
    const member = await Member.findOne(id, {
      relations: MEMBER_RELATIONS,
    });
    if (!member) throw new Error('Member not found');

    member.roles = member.roles.filter((role) => role.id !== roleId);
    await member.save();

    return Member.findOne(id, {
      relations: MEMBER_RELATIONS,
    });
  }
}
