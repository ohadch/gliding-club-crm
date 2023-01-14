/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetRoles
// ====================================================

export interface GetRoles_roles_duties_shift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GetRoles_roles_duties_shift_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetRoles_roles_duties_shift_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetRoles_roles_duties_shift_duties {
  __typename: "Duty";
  id: number;
  member: GetRoles_roles_duties_shift_duties_member | null;
  role: GetRoles_roles_duties_shift_duties_role;
}

export interface GetRoles_roles_duties_shift {
  __typename: "Shift";
  id: number;
  action: GetRoles_roles_duties_shift_action;
  type: ShiftType;
  duties: GetRoles_roles_duties_shift_duties[] | null;
}

export interface GetRoles_roles_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetRoles_roles_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GetRoles_roles_duties {
  __typename: "Duty";
  id: number;
  shift: GetRoles_roles_duties_shift;
  member: GetRoles_roles_duties_member | null;
  role: GetRoles_roles_duties_role;
}

export interface GetRoles_roles_qualifiedMembers {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GetRoles_roles {
  __typename: "Role";
  id: number;
  name: string;
  duties: GetRoles_roles_duties[] | null;
  qualifiedMembers: GetRoles_roles_qualifiedMembers[] | null;
}

export interface GetRoles {
  roles: GetRoles_roles[];
}
