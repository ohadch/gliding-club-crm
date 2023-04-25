import {
    ICreateActionOptions, ICreateGliderOptions,
    ICreateMemberOptions, ICreateMemberPreferencesOptions,
    ICreateRoleOptions, ICreateShiftOptions,
} from "./seed.types";
import {Role} from "../../models/Role";
import {Member} from "../../models/Member";
import {Action} from "../../models/Action";
import {Shift} from "../../models/Shift";
import {getLogger} from "../logging";
import {Duty} from "../../models/Duty";
import {MemberPreference} from "../../models/MemberPreference";
import {Glider} from "../../models/Glider";
import {GliderReservationQueueCycle} from "../../models/GliderReservationQueueCycle";
import {Endorsement} from "../../models/Endorsement";

const logger = getLogger("seed-utils");

export async function createRole(options: ICreateRoleOptions): Promise<Role> {
    logger.info(`Creating role ${options.name}`);

    const role = new Role();

    role.name = options.name;
    await role.save();

    return role;
}

export async function createShift(actionId: number, options: ICreateShiftOptions): Promise<Shift> {
    logger.info(`Creating shift with config ${JSON.stringify(options)}`);

    const shift = new Shift();
    shift.actionId = actionId;
    shift.type = options.type;
    await shift.save();
    await shift.reload()

    for await (const duty of options.duties) {
        for (let i = 0; i < duty.numPeople; i++) {
            const newDuty = new Duty();
            newDuty.role = duty.role;
            newDuty.shift = shift;
            await newDuty.save();
        }
    }

    await shift.save();
    return shift;
}

export async function createMember(options: ICreateMemberOptions): Promise<Member> {
    logger.info(`Creating member ${options.firstName} ${options.lastName}`);

    const member = new Member();
    member.firstName = options.firstName;
    member.lastName = options.lastName;
    member.email = options.email;
    member.mobilePhone = options.mobilePhone;
    member.roles = options.roles;
    await member.save();

    return member;
}

export async function createAction(options: ICreateActionOptions): Promise<Action> {
    logger.info(`Creating action ${options.date.toISOString()}`);
    const action = new Action();

    action.date = options.date;
    await action.save();
    await action.reload();

    for await (const shiftOptions of options.shifts) {
        logger.info(`Creating shift for action ${action.id}`);
        await createShift(action.id, shiftOptions);
    }

    return action;
}

export async function createMemberAssignmentPreference(options: ICreateMemberPreferencesOptions) {
    logger.info(`Creating member assignment preferences of type ${options.type} for member ${options.memberName}`);

    const member = await Member.findOne({
        where: {
            firstName: options.memberName.split(" ")[0],
            lastName: options.memberName.split(" ")[1],
        }
    })

    if (!member) {
        throw new Error(`Could not find member with name ${options.memberName}`)
    }

    const preference = new MemberPreference()
    preference.member = member;
    preference.type = options.type;
    preference.otherMember = options.otherMember;
    preference.startDate = options.startDate;
    preference.endDate = options.endDate;

    await preference.save();

}


export async function createGlider(options: ICreateGliderOptions): Promise<Glider> {
    logger.info(`Creating glider ${options.callSign}`);
    const glider = new Glider();

    glider.callSign = options.callSign;
    glider.owners = options.owners;
    await glider.save();

    const endorsements: Endorsement[] = options.endorsedMembers.map(
        member => {
            const endorsement = new Endorsement();
            endorsement.glider = glider;
            endorsement.member = member;
            return endorsement;
        }
    )
    logger.info(`Creating ${endorsements.length} endorsements for glider ${glider.callSign}`);
    await Endorsement.save(endorsements);

    return glider;
}


export async function createGliderReservationQueueCycle(
    name: string,
    memberRankDifferenceBetweenConsecutiveActions: number,
    actions: Action[],
) {
    logger.info(`Creating glider reservation queue cycle '${name}'`);
    const gliderReservationQueueCycle = new GliderReservationQueueCycle();

    gliderReservationQueueCycle.name = name;
    gliderReservationQueueCycle.memberRankDifferenceBetweenConsecutiveActions = 1;
    gliderReservationQueueCycle.actions = actions;

    await gliderReservationQueueCycle.save();

    return gliderReservationQueueCycle;
}