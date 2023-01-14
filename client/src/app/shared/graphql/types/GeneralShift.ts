/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShiftType } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL fragment: GeneralShift
// ====================================================

export interface GeneralShift_action {
  __typename: "Action";
  id: number;
  date: any;
}

export interface GeneralShift_duties_member {
  __typename: "Member";
  id: number;
  fullName: string;
}

export interface GeneralShift_duties_role {
  __typename: "Role";
  id: number;
  name: string;
}

export interface GeneralShift_duties {
  __typename: "Duty";
  id: number;
  member: GeneralShift_duties_member | null;
  role: GeneralShift_duties_role;
}

export interface GeneralShift {
  __typename: "Shift";
  id: number;
  action: GeneralShift_action;
  type: ShiftType;
  duties: GeneralShift_duties[] | null;
}
