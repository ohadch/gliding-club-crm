/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGliders
// ====================================================

export interface GetGliders_gliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetGliders_gliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetGliders_gliders_owners_roles[] | null;
}

export interface GetGliders_gliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  selfLaunch: boolean;
  numSeats: number;
  owners: GetGliders_gliders_owners[] | null;
}

export interface GetGliders {
  gliders: GetGliders_gliders[];
}
