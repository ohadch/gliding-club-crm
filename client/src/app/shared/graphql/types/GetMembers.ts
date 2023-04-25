/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType, MemberAssignmentPreferenceType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetMembers
// ====================================================

export interface GetMembers_members_roles {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetMembers_members_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetMembers_members_duties_shift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GetMembers_members_duties_shift {
  __typename: "Shift";
  id: number;
  action: GetMembers_members_duties_shift_action;
  type: ShiftType;
}

export interface GetMembers_members_duties {
  __typename: "Duty";
  id: number;
  role: GetMembers_members_duties_role;
  shift: GetMembers_members_duties_shift;
}

export interface GetMembers_members_preferences {
  __typename: "MemberPreference";
  id: number;
  type: MemberAssignmentPreferenceType;
  startDate: any | null;
  endDate: any | null;
}

export interface GetMembers_members_endorsements_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
}

export interface GetMembers_members_endorsements {
  __typename: "Endorsement";
  glider: GetMembers_members_endorsements_glider | null;
}

export interface GetMembers_members {
  __typename: "Member";
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  roles: GetMembers_members_roles[] | null;
  duties: GetMembers_members_duties[] | null;
  preferences: GetMembers_members_preferences[] | null;
  endorsements: GetMembers_members_endorsements[] | null;
}

export interface GetMembers {
  members: GetMembers_members[];
}

export interface GetMembersVariables {
  page: number;
}
