/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL fragment: GeneralDuty
// ====================================================

export interface GeneralDuty_shift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GeneralDuty_shift_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GeneralDuty_shift_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GeneralDuty_shift_duties {
  __typename: "Duty";
  id: number;
  member: GeneralDuty_shift_duties_member | null;
  role: GeneralDuty_shift_duties_role;
}

export interface GeneralDuty_shift {
  __typename: "Shift";
  id: number;
  action: GeneralDuty_shift_action;
  type: ShiftType;
  duties: GeneralDuty_shift_duties[] | null;
}

export interface GeneralDuty_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GeneralDuty_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GeneralDuty {
  __typename: "Duty";
  id: number;
  shift: GeneralDuty_shift;
  member: GeneralDuty_member | null;
  role: GeneralDuty_role;
}
