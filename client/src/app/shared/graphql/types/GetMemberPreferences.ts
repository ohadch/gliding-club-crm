/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MemberAssignmentPreferenceType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetMemberPreferences
// ====================================================

export interface GetMemberPreferences_memberPreferences_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetMemberPreferences_memberPreferences_otherMember {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetMemberPreferences_memberPreferences {
  __typename: "MemberPreference";
  id: number;
  member: GetMemberPreferences_memberPreferences_member | null;
  otherMember: GetMemberPreferences_memberPreferences_otherMember | null;
  startDate: any | null;
  endDate: any | null;
  type: MemberAssignmentPreferenceType;
}

export interface GetMemberPreferences {
  memberPreferences: GetMemberPreferences_memberPreferences[];
}
