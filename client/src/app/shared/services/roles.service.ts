import { Injectable } from '@angular/core';
import {QUERY_GET_ROLES} from "../graphql/queries";
import {Apollo} from "apollo-angular";
import { GetRoles } from '../graphql/types/GetRoles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private apollo: Apollo
  ) { }

  getAll() {
    return this.apollo.watchQuery<GetRoles>({
      query: QUERY_GET_ROLES,
    }).valueChanges
  }
}
