import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {GetMembers, GetMembers_members, GetMembersVariables} from '../graphql/types/GetMembers';
import {QUERY_GET_MEMBER, QUERY_GET_MEMBERS} from "../graphql/queries";
import {GetMember, GetMemberVariables} from "../graphql/types/GetMember";
import {CreateMemberInput} from "../../../types/graphql-global-types";
import {CreateMember, CreateMemberVariables} from "../graphql/types/CreateMember";
import {MUTATION_CREATE_MEMBER} from "../graphql/mutations";

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private apollo: Apollo
  ) { }

  getOne(id: number) {
    return this.apollo.watchQuery<GetMember, GetMemberVariables>({
      query: QUERY_GET_MEMBER,
      variables: {
        id
      }
    }).valueChanges
  }

  getByPage(page: number) {
    return this.apollo.watchQuery<GetMembers, GetMembersVariables>({
      query: QUERY_GET_MEMBERS,
      fetchPolicy: "network-only",
      variables: {
        page
      }
    })
  }

  async getAll(members: GetMembers_members[] = [], page = 1): Promise<GetMembers_members[]> {
    const { data: { members: results } } = await this.getByPage(page ++).result()

    if (results.length === 0) {
      return members
    }

    return this.getAll([...members, ...results], page + 1)
  }


  create(data: CreateMemberInput) {
    return this.apollo.mutate<CreateMember, CreateMemberVariables>({
      mutation: MUTATION_CREATE_MEMBER,
      variables: {
        data
      }
    })
  }
}
