/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType, MemberAssignmentPreferenceType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL fragment: GeneralMember
// ====================================================

export interface GeneralMember_roles {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GeneralMember_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GeneralMember_duties_shift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GeneralMember_duties_shift {
  __typename: "Shift";
  id: number;
  action: GeneralMember_duties_shift_action;
  type: ShiftType;
}

export interface GeneralMember_duties {
  __typename: "Duty";
  id: number;
  role: GeneralMember_duties_role;
  shift: GeneralMember_duties_shift;
}

export interface GeneralMember_preferences {
  __typename: "MemberPreference";
  id: number;
  type: MemberAssignmentPreferenceType;
  startDate: any | null;
  endDate: any | null;
}

export interface GeneralMember_endorsements_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
}

export interface GeneralMember_endorsements {
  __typename: "Endorsement";
  glider: GeneralMember_endorsements_glider | null;
}

export interface GeneralMember {
  __typename: "Member";
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  roles: GeneralMember_roles[] | null;
  duties: GeneralMember_duties[] | null;
  preferences: GeneralMember_preferences[] | null;
  endorsements: GeneralMember_endorsements[] | null;
}
