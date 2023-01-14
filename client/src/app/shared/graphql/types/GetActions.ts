/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetActions
// ====================================================

export interface GetActions_actions_shifts_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GetActions_actions_shifts_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetActions_actions_shifts_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetActions_actions_shifts_duties {
  __typename: "Duty";
  id: number;
  member: GetActions_actions_shifts_duties_member | null;
  role: GetActions_actions_shifts_duties_role;
}

export interface GetActions_actions_shifts {
  __typename: "Shift";
  id: number;
  action: GetActions_actions_shifts_action;
  type: ShiftType;
  duties: GetActions_actions_shifts_duties[] | null;
}

export interface GetActions_actions {
  __typename: "Action";
  id: number;
  date: any;
  shifts: GetActions_actions_shifts[] | null;
}

export interface GetActions {
  actions: GetActions_actions[];
}

export interface GetActionsVariables {
  year: number;
  page: number;
}
