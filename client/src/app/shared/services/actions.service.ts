import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {GetActions, GetActionsVariables} from "../graphql/types/GetActions";
import {QUERY_GET_ACTIONS} from "../graphql/queries";
import {MUTATION_ENSURE_SHIFTS_FOR_ACTIONS} from "../graphql/mutations";
import {EnsureShiftsForActions, EnsureShiftsForActionsVariables} from "../graphql/types/EnsureShiftsForActions";

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(
    private apollo: Apollo
  ) { }


  getByYear(year: number, page: number) {
    return this.apollo.watchQuery<GetActions, GetActionsVariables>({
      query: QUERY_GET_ACTIONS,
      variables: {
        year,
        page
      }
    }).valueChanges
  }

  ensureShiftsForActions(year: number) {
    return this.apollo.mutate<EnsureShiftsForActions, EnsureShiftsForActionsVariables>({
      mutation: MUTATION_ENSURE_SHIFTS_FOR_ACTIONS,
      variables: {
        year
      }
    })
  }


}
