/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMemberInput } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateMember
// ====================================================

export interface CreateMember_createMember {
  __typename: "Member";
  fullName: string;
}

export interface CreateMember {
  createMember: CreateMember_createMember;
}

export interface CreateMemberVariables {
  data: CreateMemberInput;
}
