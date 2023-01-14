/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FlightGliderPilot
// ====================================================

export interface FlightGliderPilot_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface FlightGliderPilot_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface FlightGliderPilot_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: FlightGliderPilot_ownedGliders_owners_roles[] | null;
}

export interface FlightGliderPilot_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: FlightGliderPilot_ownedGliders_owners[] | null;
}

export interface FlightGliderPilot {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: FlightGliderPilot_roles[] | null;
  ownedGliders: FlightGliderPilot_ownedGliders[] | null;
}
