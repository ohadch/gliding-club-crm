import {
  Resolver, Query, Arg, Mutation,
} from 'type-graphql';
import { CreateRoleInput, UpdateRoleInput } from './Role.inputs';
import { Role, ROLE_RELATIONS } from './Role.model';

@Resolver()
export class RoleResolver {
    @Query(() => [Role])
  async roles() {
    return Role.find({
      relations: ROLE_RELATIONS,
    });
  }

    @Mutation(() => Role)
    async createRole(@Arg('data') data: CreateRoleInput) {
      const role = Role.create(data);
      await role.save();
      return Role.findOne(role.id, {
        relations: ROLE_RELATIONS,
      });
    }

    @Mutation(() => Role)
    async updateRole(@Arg('id') id: number, @Arg('data') data: UpdateRoleInput) {
      const role = await Role.findOne(id);
      if (!role) throw new Error('Entity not found');
      Object.assign(role, data);
      await role.save();
      return Role.findOne(role.id, {
        relations: ROLE_RELATIONS,
      });
    }

    @Mutation(() => Boolean)
    async deleteRole(@Arg('id') id: number) {
      const role = await Role.findOne(id);
      if (!role) throw new Error('Entity not found');
      await role.remove();
      return true;
    }
}
