/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateShiftInput } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateShift
// ====================================================

export interface CreateShift_createShift {
  __typename: "Shift";
  id: number;
}

export interface CreateShift {
  createShift: CreateShift_createShift;
}

export interface CreateShiftVariables {
  data: CreateShiftInput;
}
