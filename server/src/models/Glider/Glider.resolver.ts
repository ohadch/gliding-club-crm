import {
  Resolver, Query, Arg, Mutation,
} from 'type-graphql';
import { Glider, GLIDER_RELATIONS } from './Glider.model';
import { CreateGliderInput, UpdateGliderInput } from './Glider.inputs';

@Resolver()
export class GliderResolver {
    @Query(() => [Glider])
  async gliders() {
    return Glider.find({
      relations: GLIDER_RELATIONS,
    });
  }

    @Mutation(() => Glider)
    async createGlider(@Arg('data') data: CreateGliderInput) {
      const glider = Glider.create(data);
      await glider.save();
      return Glider.findOne(glider.id);
    }

    @Mutation(() => Glider)
    async updateGlider(@Arg('id') id: number, @Arg('data') data: UpdateGliderInput) {
      const glider = await Glider.findOne(id);
      if (!glider) throw new Error('Entity not found');
      Object.assign(glider, data);
      await glider.save();
      return glider;
    }

    @Mutation(() => Boolean)
    async deleteGlider(@Arg('id') id: number) {
      const glider = await Glider.findOne(id);
      if (!glider) throw new Error('Entity not found');
      await glider.remove();
      return true;
    }

  // @Mutation(() => Member)
  // async addOwnerToGlider(@Arg("id") id: number, @Arg("ownerId") ownerId: number) {
  //     const glider = await Glider.findOne(id, {
  //         relations: GLIDER_RELATIONS
  //     });
  //     if (!glider) throw new Error("Entity not found");
  //     const owner = await Member.findOne(ownerId)
  //     if (!owner) throw new Error("Owner not found");
  //
  //     glider.owners.push(owner)
  //     await glider.save()
  //
  //     return Glider.findOne(id, {
  //         relations: GLIDER_RELATIONS
  //     });
  // }

  // @Mutation(() => Member)
  // async removeOwnerFromGlider(@Arg("id") id: number, @Arg("ownerId") ownerId: number) {
  //     const glider = await Glider.findOne(id, {
  //         relations: GLIDER_RELATIONS
  //     });
  //     if (!glider) throw new Error("Entity not found");
  //
  //     glider.owners.filter(owner => owner.id !== ownerId)
  //     await glider.save()
  //
  //     return Glider.findOne(id, {
  //         relations: GLIDER_RELATIONS
  //     });
  // }
}
