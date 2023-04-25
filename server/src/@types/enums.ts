import { registerEnumType } from "type-graphql";

// disable unused variable warning for enums for the whole file

/* eslint-disable no-unused-vars */

export enum ShiftType {
    Morning = "Morning",
    Noon = "Noon"
}
registerEnumType(ShiftType, {
  name: "ShiftType"
});

export enum MemberAssignmentPreferenceType {
    Unavailable = "Unavailable",
    RequestSpecific = "RequestSpecific",
    BePositionedWithMember = "BePositionedWithMember",
    DoNotBePositionedWithMember = "DoNotBePositionedWithMember"
}
registerEnumType(MemberAssignmentPreferenceType, {
  name: "MemberAssignmentPreferenceType"
});
