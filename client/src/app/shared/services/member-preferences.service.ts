import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import { GetMemberPreferences } from '../graphql/types/GetMemberPreferences';
import {QUERY_GET_MEMBER_PREFERENCES} from "../graphql/queries";
import {CreateMemberPreference, CreateMemberPreferenceVariables} from '../graphql/types/CreateMemberPreference';
import {MUTATION_CREATE_MEMBER_PREFERENCE, MUTATION_DELETE_MEMBER_PREFERENCE} from "../graphql/mutations";
import { CreateMemberPreferenceInput } from 'src/types/graphql-global-types';
import {DeleteMemberPreference, DeleteMemberPreferenceVariables} from "../graphql/types/DeleteMemberPreference";

@Injectable({
  providedIn: 'root'
})
export class MemberPreferencesService {

  constructor(
    private apollo: Apollo
  ) { }

  getAll() {
    return this.apollo.watchQuery<GetMemberPreferences>({
      query: QUERY_GET_MEMBER_PREFERENCES,
      fetchPolicy: "network-only"
    }).valueChanges
  }


  create(data: CreateMemberPreferenceInput) {
    return this.apollo.mutate<CreateMemberPreference, CreateMemberPreferenceVariables>({
      mutation: MUTATION_CREATE_MEMBER_PREFERENCE,
      variables: {
        data
      }
    })
  }

  delete(id: number) {
    return this.apollo.mutate<DeleteMemberPreference, DeleteMemberPreferenceVariables>({
      mutation: MUTATION_DELETE_MEMBER_PREFERENCE,
      variables: {
        id
      }
    })
  }
}
