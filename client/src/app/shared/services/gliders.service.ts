import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {QUERY_GET_GLIDERS} from "../graphql/queries";
import {GetGliders} from "../graphql/types/GetGliders";

@Injectable({
  providedIn: 'root'
})
export class GlidersService {

  constructor(
    private apollo: Apollo
  ) {
  }
  getAll() {
    return this.apollo.watchQuery<GetGliders>({
      query: QUERY_GET_GLIDERS,
    }).valueChanges
  }
}
