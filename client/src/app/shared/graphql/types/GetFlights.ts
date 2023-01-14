/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFlights
// ====================================================

export interface GetFlights_flights_payersType {
  __typename: "PayersType";
  id: number;
  name: string;
}

export interface GetFlights_flights_paymentMethod {
  __typename: "PaymentMethod";
  id: number;
  name: string;
}

export interface GetFlights_flights_towType {
  __typename: "TowType";
  id: number;
  name: string;
}

export interface GetFlights_flights_glider_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_glider_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_glider_owners_roles[] | null;
}

export interface GetFlights_flights_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: GetFlights_flights_glider_owners[] | null;
}

export interface GetFlights_flights_airplane {
  __typename: "Airplane";
  id: number;
  callSign: string;
}

export interface GetFlights_flights_pilot1_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_pilot1_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_pilot1_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_pilot1_ownedGliders_owners_roles[] | null;
}

export interface GetFlights_flights_pilot1_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: GetFlights_flights_pilot1_ownedGliders_owners[] | null;
}

export interface GetFlights_flights_pilot1 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_pilot1_roles[] | null;
  ownedGliders: GetFlights_flights_pilot1_ownedGliders[] | null;
}

export interface GetFlights_flights_pilot2_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_pilot2_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_pilot2_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_pilot2_ownedGliders_owners_roles[] | null;
}

export interface GetFlights_flights_pilot2_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: GetFlights_flights_pilot2_ownedGliders_owners[] | null;
}

export interface GetFlights_flights_pilot2 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_pilot2_roles[] | null;
  ownedGliders: GetFlights_flights_pilot2_ownedGliders[] | null;
}

export interface GetFlights_flights_towPilot_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_towPilot {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_towPilot_roles[] | null;
}

export interface GetFlights_flights_paymentReceiver_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_paymentReceiver {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_paymentReceiver_roles[] | null;
}

export interface GetFlights_flights_payingMember_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface GetFlights_flights_payingMember {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: GetFlights_flights_payingMember_roles[] | null;
}

export interface GetFlights_flights {
  __typename: "Flight";
  id: number;
  takeOffAt: any | null;
  landingAt: any | null;
  payersType: GetFlights_flights_payersType | null;
  paymentMethod: GetFlights_flights_paymentMethod | null;
  towType: GetFlights_flights_towType | null;
  glider: GetFlights_flights_glider | null;
  airplane: GetFlights_flights_airplane | null;
  pilot1: GetFlights_flights_pilot1 | null;
  pilot2: GetFlights_flights_pilot2 | null;
  towPilot: GetFlights_flights_towPilot | null;
  paymentReceiver: GetFlights_flights_paymentReceiver | null;
  payingMember: GetFlights_flights_payingMember | null;
}

export interface GetFlights {
  flights: GetFlights_flights[];
}

export interface GetFlightsVariables {
  actionId: number;
}
