/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DashboardFlight
// ====================================================

export interface DashboardFlight_payersType {
  __typename: "PayersType";
  id: number;
  name: string;
}

export interface DashboardFlight_paymentMethod {
  __typename: "PaymentMethod";
  id: number;
  name: string;
}

export interface DashboardFlight_towType {
  __typename: "TowType";
  id: number;
  name: string;
}

export interface DashboardFlight_glider_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_glider_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_glider_owners_roles[] | null;
}

export interface DashboardFlight_glider {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: DashboardFlight_glider_owners[] | null;
}

export interface DashboardFlight_airplane {
  __typename: "Airplane";
  id: number;
  callSign: string;
}

export interface DashboardFlight_pilot1_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_pilot1_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_pilot1_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_pilot1_ownedGliders_owners_roles[] | null;
}

export interface DashboardFlight_pilot1_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: DashboardFlight_pilot1_ownedGliders_owners[] | null;
}

export interface DashboardFlight_pilot1 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_pilot1_roles[] | null;
  ownedGliders: DashboardFlight_pilot1_ownedGliders[] | null;
}

export interface DashboardFlight_pilot2_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_pilot2_ownedGliders_owners_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_pilot2_ownedGliders_owners {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_pilot2_ownedGliders_owners_roles[] | null;
}

export interface DashboardFlight_pilot2_ownedGliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  numSeats: number;
  selfLaunch: boolean;
  owners: DashboardFlight_pilot2_ownedGliders_owners[] | null;
}

export interface DashboardFlight_pilot2 {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_pilot2_roles[] | null;
  ownedGliders: DashboardFlight_pilot2_ownedGliders[] | null;
}

export interface DashboardFlight_towPilot_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_towPilot {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_towPilot_roles[] | null;
}

export interface DashboardFlight_paymentReceiver_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_paymentReceiver {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_paymentReceiver_roles[] | null;
}

export interface DashboardFlight_payingMember_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DashboardFlight_payingMember {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: DashboardFlight_payingMember_roles[] | null;
}

export interface DashboardFlight {
  __typename: "Flight";
  id: number;
  takeOffAt: any | null;
  landingAt: any | null;
  payersType: DashboardFlight_payersType | null;
  paymentMethod: DashboardFlight_paymentMethod | null;
  towType: DashboardFlight_towType | null;
  glider: DashboardFlight_glider | null;
  airplane: DashboardFlight_airplane | null;
  pilot1: DashboardFlight_pilot1 | null;
  pilot2: DashboardFlight_pilot2 | null;
  towPilot: DashboardFlight_towPilot | null;
  paymentReceiver: DashboardFlight_paymentReceiver | null;
  payingMember: DashboardFlight_payingMember | null;
}
