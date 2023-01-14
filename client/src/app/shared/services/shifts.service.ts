import { Injectable } from '@angular/core';
import {QUERY_GET_SHIFTS} from "../graphql/queries";
import {GetShifts, GetShiftsVariables} from "../graphql/types/GetShifts";
import {Apollo} from "apollo-angular";
import {CreateShiftInput} from "../../../types/graphql-global-types";
import {CreateShift, CreateShiftVariables} from "../graphql/types/CreateShift";
import {CreateMemberVariables} from "../graphql/types/CreateMember";
import {MUTATION_CREATE_SHIFT, MUTATION_DELETE_SHIFT} from "../graphql/mutations";
import {DeleteShift, DeleteShiftVariables} from "../graphql/types/DeleteShift";

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  constructor(
    private apollo: Apollo
  ) { }

  getAll(page: number) {
    return this.apollo.watchQuery<GetShifts, GetShiftsVariables>({
      query: QUERY_GET_SHIFTS,
      variables: {
        page
      },
      fetchPolicy: "network-only"
    }).valueChanges
  }

  create(data: CreateShiftInput) {
    return this.apollo.mutate<CreateShift, CreateShiftVariables>({
      mutation: MUTATION_CREATE_SHIFT,
      variables: {
        data
      }
    })
  }

  delete(id: number) {
    return this.apollo.mutate<DeleteShift, DeleteShiftVariables>({
      mutation: MUTATION_DELETE_SHIFT,
      variables: {
        id
      }
    })
  }
}
