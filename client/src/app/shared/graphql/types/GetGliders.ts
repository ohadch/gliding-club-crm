/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGliders
// ====================================================

export interface GetGliders_gliders {
  __typename: "Glider";
  id: number;
  callSign: string;
  type: number | null;
}

export interface GetGliders {
  gliders: GetGliders_gliders[];
}
