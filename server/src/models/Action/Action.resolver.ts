import {
  Resolver, Query, Arg, Mutation,
} from 'type-graphql';
import { Action, ACTION_RELATIONS } from './Action.model';
import { getLogger } from "../../services/logging";
import * as _ from "lodash"

@Resolver()
export class ActionResolver {
    @Query(() => [Action])
  async actions(@Arg("year") year: number, @Arg("page") page: number) {
      const entriesPerPage = 25;
      const actions = await Action.getByYear(year).then(actions => actions.sort((a, b) => a.date > b.date ? 1 : -1));

      const pages = _.chunk(actions, entriesPerPage);
      return pages[page - 1] || [];
  }

    @Mutation(() => Boolean)
    async ensureShiftsForActions(@Arg("year") year: number) {
      try {
        const actions = await Action.getByYear(year);
        const promises = actions.map(action => action.ensureShifts());
        await Promise.all(promises);
        return true;
      } catch (e: any) {
        getLogger().error(e.message);
        throw e;
      }
    }
}
