/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMemberPreferenceInput } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateMemberPreference
// ====================================================

export interface CreateMemberPreference_createMemberPreference_member {
  __typename: "Member";
  id: number;
}

export interface CreateMemberPreference_createMemberPreference {
  __typename: "MemberPreference";
  member: CreateMemberPreference_createMemberPreference_member | null;
}

export interface CreateMemberPreference {
  createMemberPreference: CreateMemberPreference_createMemberPreference;
}

export interface CreateMemberPreferenceVariables {
  data: CreateMemberPreferenceInput;
}
