/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FlightGlider
// ====================================================

export interface FlightGlider_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface FlightGlider_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: FlightGlider_owners_roles[] | null;
}

export interface FlightGlider {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: FlightGlider_owners[] | null;
}
