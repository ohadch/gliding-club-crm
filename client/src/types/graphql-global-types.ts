/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum MemberAssignmentPreferenceType {
  BePositionedWithMember = "BePositionedWithMember",
  DoNotBePositionedWithMember = "DoNotBePositionedWithMember",
  RequestSpecific = "RequestSpecific",
  Unavailable = "Unavailable",
}

export enum ShiftType {
  Morning = "Morning",
  Noon = "Noon",
}

export interface CreateMemberInput {
  firstName: string;
  lastName: string;
  email: string;
  qualificationIds?: number[] | null;
  authId?: string[] | null;
}

export interface CreateMemberPreferenceInput {
  memberId: number;
  otherMemberId?: number | null;
  startDate?: any | null;
  endDate?: any | null;
  type: MemberAssignmentPreferenceType;
}

export interface CreateShiftInput {
  type: ShiftType;
  actionId: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
