import { Role } from "../../models/Role";
import {MemberAssignmentPreferenceType, ShiftType} from "../../@types/enums";
import {Member} from "../../models/Member";

export interface ICreateRoleOptions {
    name: string;
}

export interface ICreateMemberOptions {
    firstName: string;
    lastName: string;
    email: string;
    mobilePhone: string;
    roles: Role[];
}

export interface ICreateShiftOptions {
    type: ShiftType,
    duties: ICreateDutyOptions[];
}

export interface ICreateActionOptions {
    date: Date;
    shifts: ICreateShiftOptions[];
}


export interface ICreateDutyOptions {
    role: Role;
    numPeople: number;
}

export interface ICreateMemberPreferencesOptions {
    memberName: string;
    type: MemberAssignmentPreferenceType;
    otherMember?: Member;
    startDate?: Date;
    endDate?: Date;
}

export interface ICreateGliderOptions {
    callSign: string;
    owners: Member[];
    endorsedMembers: Member[];

    complexity: number;
}