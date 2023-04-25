/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType, MemberAssignmentPreferenceType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetMember
// ====================================================

export interface GetMember_member_gliderReservationQueueSpacingGroup {
  __typename: "GliderReservationQueueSpacingGroup";
  id: number;
  name: string;
}

export interface GetMember_member_roles {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetMember_member_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetMember_member_duties_shift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GetMember_member_duties_shift {
  __typename: "Shift";
  id: number;
  action: GetMember_member_duties_shift_action;
  type: ShiftType;
}

export interface GetMember_member_duties {
  __typename: "Duty";
  id: number;
  role: GetMember_member_duties_role;
  shift: GetMember_member_duties_shift;
}

export interface GetMember_member_preferences {
  __typename: "MemberPreference";
  id: number;
  type: MemberAssignmentPreferenceType;
  startDate: any | null;
  endDate: any | null;
}

export interface GetMember_member_endorsements_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
}

export interface GetMember_member_endorsements {
  __typename: "Endorsement";
  glider: GetMember_member_endorsements_glider | null;
}

export interface GetMember_member {
  __typename: "Member";
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  gliderReservationQueueSpacingGroup: GetMember_member_gliderReservationQueueSpacingGroup;
  roles: GetMember_member_roles[] | null;
  duties: GetMember_member_duties[] | null;
  preferences: GetMember_member_preferences[] | null;
  endorsements: GetMember_member_endorsements[];
}

export interface GetMember {
  member: GetMember_member;
}

export interface GetMemberVariables {
  id: number;
}
