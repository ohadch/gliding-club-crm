import {
  Resolver, Query, Arg, Mutation,
} from 'type-graphql';
import { MEMBER_PREFERENCE_RELATIONS, MemberPreference } from './MemberPreference.model';
import { CreateMemberPreferenceInput } from './MemberPreference.inputs';
import { getLogger } from "../../services/logging";

@Resolver()
export class MemberPreferenceResolver {
    @Query(() => [MemberPreference])
  async memberPreferences() {
    return MemberPreference.find({
      relations: MEMBER_PREFERENCE_RELATIONS,
    });
  }

    @Mutation(() => MemberPreference)
    async createMemberPreference(@Arg('data') data: CreateMemberPreferenceInput) {
      getLogger().info(`Creating new member preference: ${JSON.stringify(data)}`);

      const memberPreference = MemberPreference.create(data);
      await memberPreference.save();
      return MemberPreference.findOne(memberPreference.id, {
        relations: MEMBER_PREFERENCE_RELATIONS,
      });
    }

    @Mutation(() => Boolean)
    async deleteMemberPreference(@Arg('id') id: number) {
      getLogger().info(`Deleting member preference ${id}`);

      const memberPreference = await MemberPreference.findOne(id);
      if (!memberPreference) throw new Error('Entity not found');
      await memberPreference.remove();
      return true;
    }
}
