/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetDuties
// ====================================================

export interface GetDuties_duties_shift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GetDuties_duties_shift_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetDuties_duties_shift_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetDuties_duties_shift_duties {
  __typename: "Duty";
  id: number;
  member: GetDuties_duties_shift_duties_member | null;
  role: GetDuties_duties_shift_duties_role;
}

export interface GetDuties_duties_shift {
  __typename: "Shift";
  id: number;
  action: GetDuties_duties_shift_action;
  type: ShiftType;
  duties: GetDuties_duties_shift_duties[] | null;
}

export interface GetDuties_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetDuties_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetDuties_duties {
  __typename: "Duty";
  id: number;
  shift: GetDuties_duties_shift;
  member: GetDuties_duties_member | null;
  role: GetDuties_duties_role;
}

export interface GetDuties {
  duties: GetDuties_duties[];
}

export interface GetDutiesVariables {
  page: number;
}
