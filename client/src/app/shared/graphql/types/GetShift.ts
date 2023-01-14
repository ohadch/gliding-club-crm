/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetShift
// ====================================================

export interface GetShift_shift_type {
  __typename: "ShiftType";
  id: number;
  name: string;
}

export interface GetShift_shift_action {
  __typename: "Action";
  id: number;
  startAt: any;
}

export interface GetShift_shift_duties_member_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetShift_shift_duties_member {
  __typename: "Member";
  id: number;
  mobilePhone: string;
  firstName: string;
  lastName: string;
  roles: GetShift_shift_duties_member_roles[] | null;
}

export interface GetShift_shift_duties_role {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetShift_shift_duties {
  __typename: "ShiftDuty";
  id: number;
  member: GetShift_shift_duties_member | null;
  role: GetShift_shift_duties_role | null;
}

export interface GetShift_shift {
  __typename: "Shift";
  id: number;
  type: GetShift_shift_type | null;
  action: GetShift_shift_action | null;
  duties: GetShift_shift_duties[] | null;
}

export interface GetShift {
  shift: GetShift_shift | null;
}

export interface GetShiftVariables {
  id: number;
}
