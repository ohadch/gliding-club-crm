/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateFlightInput } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateFlight
// ====================================================

export interface UpdateFlight_updateFlight_payersType {
  __typename: "PayersType";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_paymentMethod {
  __typename: "PaymentMethod";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_towType {
  __typename: "TowType";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_glider_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_glider_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_glider_owners_roles[] | null;
}

export interface UpdateFlight_updateFlight_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: UpdateFlight_updateFlight_glider_owners[] | null;
}

export interface UpdateFlight_updateFlight_airplane {
  __typename: "Airplane";
  id: number;
  callSign: string;
}

export interface UpdateFlight_updateFlight_pilot1_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_pilot1_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_pilot1_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_pilot1_ownedGliders_owners_roles[] | null;
}

export interface UpdateFlight_updateFlight_pilot1_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: UpdateFlight_updateFlight_pilot1_ownedGliders_owners[] | null;
}

export interface UpdateFlight_updateFlight_pilot1 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_pilot1_roles[] | null;
  ownedGliders: UpdateFlight_updateFlight_pilot1_ownedGliders[] | null;
}

export interface UpdateFlight_updateFlight_pilot2_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_pilot2_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_pilot2_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_pilot2_ownedGliders_owners_roles[] | null;
}

export interface UpdateFlight_updateFlight_pilot2_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: UpdateFlight_updateFlight_pilot2_ownedGliders_owners[] | null;
}

export interface UpdateFlight_updateFlight_pilot2 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_pilot2_roles[] | null;
  ownedGliders: UpdateFlight_updateFlight_pilot2_ownedGliders[] | null;
}

export interface UpdateFlight_updateFlight_towPilot_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_towPilot {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_towPilot_roles[] | null;
}

export interface UpdateFlight_updateFlight_paymentReceiver_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_paymentReceiver {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_paymentReceiver_roles[] | null;
}

export interface UpdateFlight_updateFlight_payingMember_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface UpdateFlight_updateFlight_payingMember {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: UpdateFlight_updateFlight_payingMember_roles[] | null;
}

export interface UpdateFlight_updateFlight {
  __typename: "Flight";
  id: number;
  takeOffAt: any | null;
  landingAt: any | null;
  payersType: UpdateFlight_updateFlight_payersType | null;
  paymentMethod: UpdateFlight_updateFlight_paymentMethod | null;
  towType: UpdateFlight_updateFlight_towType | null;
  glider: UpdateFlight_updateFlight_glider | null;
  airplane: UpdateFlight_updateFlight_airplane | null;
  pilot1: UpdateFlight_updateFlight_pilot1 | null;
  pilot2: UpdateFlight_updateFlight_pilot2 | null;
  towPilot: UpdateFlight_updateFlight_towPilot | null;
  paymentReceiver: UpdateFlight_updateFlight_paymentReceiver | null;
  payingMember: UpdateFlight_updateFlight_payingMember | null;
}

export interface UpdateFlight {
  updateFlight: UpdateFlight_updateFlight;
}

export interface UpdateFlightVariables {
  id: number;
  data: UpdateFlightInput;
}
