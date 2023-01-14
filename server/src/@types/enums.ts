import { registerEnumType } from "type-graphql";

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

