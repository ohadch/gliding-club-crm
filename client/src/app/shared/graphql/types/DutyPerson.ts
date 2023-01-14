/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DutyPerson
// ====================================================

export interface DutyPerson_roles {
  __typename: "ShiftDutyRole";
  id: number;
  name: string;
}

export interface DutyPerson {
  __typename: "Member";
  id: number;
  mobilePhone: string;
  firstName: string;
  lastName: string;
  roles: DutyPerson_roles[] | null;
}
