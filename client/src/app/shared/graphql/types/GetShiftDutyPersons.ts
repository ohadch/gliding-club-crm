/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetShiftDutyPersons
// ====================================================

export interface GetShiftDutyPersons_shifts_action {
  __typename: "Action";
  id: number;
}

export interface GetShiftDutyPersons_shifts_duties_member_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetShiftDutyPersons_shifts_duties_member {
  __typename: "Member";
  id: number;
  mobilePhone: string;
  firstName: string;
  lastName: string;
  roles: GetShiftDutyPersons_shifts_duties_member_roles[] | null;
}

export interface GetShiftDutyPersons_shifts_duties {
  __typename: "ShiftDuty";
  id: number;
  member: GetShiftDutyPersons_shifts_duties_member | null;
}

export interface GetShiftDutyPersons_shifts {
  __typename: "Shift";
  id: number;
  action: GetShiftDutyPersons_shifts_action | null;
  duties: GetShiftDutyPersons_shifts_duties[] | null;
}

export interface GetShiftDutyPersons {
  shifts: GetShiftDutyPersons_shifts[];
}

export interface GetShiftDutyPersonsVariables {
  actionId: number;
}
