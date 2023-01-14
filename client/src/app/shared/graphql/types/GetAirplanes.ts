/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAirplanes
// ====================================================

export interface GetAirplanes_airplanes {
  __typename: "Airplane";
  id: number;
  callSign: string;
}

export interface GetAirplanes {
  airplanes: GetAirplanes_airplanes[];
}
