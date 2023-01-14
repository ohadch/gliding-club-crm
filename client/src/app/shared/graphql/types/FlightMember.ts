/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FlightMember
// ====================================================

export interface FlightMember_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface FlightMember {
  __typename: "Member";
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: FlightMember_roles[] | null;
}
