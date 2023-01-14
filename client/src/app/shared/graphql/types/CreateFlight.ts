/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateFlightInput } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateFlight
// ====================================================

export interface CreateFlight_createFlight_payersType {
  __typename: "PayersType";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_paymentMethod {
  __typename: "PaymentMethod";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_towType {
  __typename: "TowType";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_glider_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_glider_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_glider_owners_roles[] | null;
}

export interface CreateFlight_createFlight_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: CreateFlight_createFlight_glider_owners[] | null;
}

export interface CreateFlight_createFlight_airplane {
  __typename: "Airplane";
  id: number;
  callSign: string;
}

export interface CreateFlight_createFlight_pilot1_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_pilot1_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_pilot1_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_pilot1_ownedGliders_owners_roles[] | null;
}

export interface CreateFlight_createFlight_pilot1_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: CreateFlight_createFlight_pilot1_ownedGliders_owners[] | null;
}

export interface CreateFlight_createFlight_pilot1 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_pilot1_roles[] | null;
  ownedGliders: CreateFlight_createFlight_pilot1_ownedGliders[] | null;
}

export interface CreateFlight_createFlight_pilot2_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_pilot2_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_pilot2_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_pilot2_ownedGliders_owners_roles[] | null;
}

export interface CreateFlight_createFlight_pilot2_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: CreateFlight_createFlight_pilot2_ownedGliders_owners[] | null;
}

export interface CreateFlight_createFlight_pilot2 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_pilot2_roles[] | null;
  ownedGliders: CreateFlight_createFlight_pilot2_ownedGliders[] | null;
}

export interface CreateFlight_createFlight_towPilot_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_towPilot {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_towPilot_roles[] | null;
}

export interface CreateFlight_createFlight_paymentReceiver_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_paymentReceiver {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_paymentReceiver_roles[] | null;
}

export interface CreateFlight_createFlight_payingMember_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface CreateFlight_createFlight_payingMember {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: CreateFlight_createFlight_payingMember_roles[] | null;
}

export interface CreateFlight_createFlight {
  __typename: "Flight";
  id: number;
  takeOffAt: any | null;
  landingAt: any | null;
  payersType: CreateFlight_createFlight_payersType | null;
  paymentMethod: CreateFlight_createFlight_paymentMethod | null;
  towType: CreateFlight_createFlight_towType | null;
  glider: CreateFlight_createFlight_glider | null;
  airplane: CreateFlight_createFlight_airplane | null;
  pilot1: CreateFlight_createFlight_pilot1 | null;
  pilot2: CreateFlight_createFlight_pilot2 | null;
  towPilot: CreateFlight_createFlight_towPilot | null;
  paymentReceiver: CreateFlight_createFlight_paymentReceiver | null;
  payingMember: CreateFlight_createFlight_payingMember | null;
}

export interface CreateFlight {
  createFlight: CreateFlight_createFlight;
}

export interface CreateFlightVariables {
  data: CreateFlightInput;
}
