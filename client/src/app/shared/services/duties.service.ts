import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {GetDuties, GetDutiesVariables} from "../graphql/types/GetDuties";
import {QUERY_GET_DUTIES} from "../graphql/queries";
import {
  MUTATION_ASSIGN_ALL_UNASSIGNED_DUTIES,
  MUTATION_ASSIGN_SINGLE_UNASSIGNED_DUTY, MUTATION_UNASSIGN_ALL_DUTIES
} from "../graphql/mutations";

@Injectable({
  providedIn: 'root'
})
export class DutiesService {

  constructor(
    private apollo: Apollo
  ) { }

  getAll(page: number) {
    return this.apollo.watchQuery<GetDuties, GetDutiesVariables>({
      query: QUERY_GET_DUTIES,
      fetchPolicy: "network-only",
      variables: {
        page
      }
    }).valueChanges
  }

  assignAllUnassignedDuties() {
    return this.apollo.mutate({
      mutation: MUTATION_ASSIGN_ALL_UNASSIGNED_DUTIES
    })
  }

  assignSingleUnassignedDuty() {
    return this.apollo.mutate({
      mutation: MUTATION_ASSIGN_SINGLE_UNASSIGNED_DUTY
    })
  }

  unassignAllDuties() {
    return this.apollo.mutate({
      mutation: MUTATION_UNASSIGN_ALL_DUTIES
    })
  }
}
