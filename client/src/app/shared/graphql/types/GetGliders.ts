/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType, MemberAssignmentPreferenceType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetGliders
// ====================================================

export interface GetGliders_gliders_owners_roles {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetGliders_gliders_owners_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetGliders_gliders_owners_duties_shift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GetGliders_gliders_owners_duties_shift {
  __typename: "Shift";
  id: number;
  action: GetGliders_gliders_owners_duties_shift_action;
  type: ShiftType;
}

export interface GetGliders_gliders_owners_duties {
  __typename: "Duty";
  id: number;
  role: GetGliders_gliders_owners_duties_role;
  shift: GetGliders_gliders_owners_duties_shift;
}

export interface GetGliders_gliders_owners_preferences {
  __typename: "MemberPreference";
  id: number;
  type: MemberAssignmentPreferenceType;
  startDate: any | null;
  endDate: any | null;
}

export interface GetGliders_gliders_owners_endorsements_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
}

export interface GetGliders_gliders_owners_endorsements {
  __typename: "Endorsement";
  glider: GetGliders_gliders_owners_endorsements_glider | null;
}

export interface GetGliders_gliders_owners {
  __typename: "Member";
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  roles: GetGliders_gliders_owners_roles[] | null;
  duties: GetGliders_gliders_owners_duties[] | null;
  preferences: GetGliders_gliders_owners_preferences[] | null;
  endorsements: GetGliders_gliders_owners_endorsements[] | null;
}

export interface GetGliders_gliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  owners: GetGliders_gliders_owners[] | null;
}

export interface GetGliders {
  gliders: GetGliders_gliders[];
}
