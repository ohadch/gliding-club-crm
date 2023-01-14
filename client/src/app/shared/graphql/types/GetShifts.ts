/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetShifts
// ====================================================

export interface GetShifts_shifts_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GetShifts_shifts_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetShifts_shifts_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetShifts_shifts_duties {
  __typename: "Duty";
  id: number;
  member: GetShifts_shifts_duties_member | null;
  role: GetShifts_shifts_duties_role;
}

export interface GetShifts_shifts {
  __typename: "Shift";
  id: number;
  action: GetShifts_shifts_action;
  type: ShiftType;
  duties: GetShifts_shifts_duties[] | null;
}

export interface GetShifts {
  shifts: GetShifts_shifts[];
}

export interface GetShiftsVariables {
  page: number;
}
