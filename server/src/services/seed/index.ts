import {MemberAssignmentPreferenceType, ShiftType} from "../../@types/enums";
import {createAction, createGlider, createMember, createMemberAssignmentPreference, createRole,} from "./seed.utils";
import {Action} from "../../models/Action";
import {getLogger} from "../logging";
import {getDatesRange} from "../utils/date.utils";
import {GlidersQueueService} from "../gliders-queue";

const logger = getLogger("seed");

export async function createSeedData() {
    logger.info("Creating seed data");

    // Get existing actions
    const actions = await Action.find();

    // If more than 1 action exists, do not create seed data
    if (actions.length > 1) {
        logger.info("Seed data already exists, not creating seed data");
        return;
    }

    // Create an array of all the Fridays and Saturdays in the provided date range
    const actionDates: Date[] = getDatesRange(new Date("2023-01-01"), new Date("2023-06-30"))
        .filter((date) => date.getDay() === 5 || date.getDay() === 6);

    logger.info(`Creating ${actionDates.length} actions`);

    // Create Roles
    const towPilotRole = await createRole({name: "Tow Pilot"});
    const fieldResponsibleRole = await createRole({name: "Field Responsible"});
    const responsibleCfiRole = await createRole({name: "Responsible CFI"});
    const maintenanceRole = await createRole({name: "Maintenance"});

    // For every action date, create an action and 2 shifts
    for await (const actionDate of actionDates) {
        await createAction({
            date: actionDate,
            shifts: [
                {
                    type: ShiftType.Morning,
                    duties: [
                        {
                            role: fieldResponsibleRole,
                            numPeople: 1,
                        },
                        {
                            role: responsibleCfiRole,
                            numPeople: 1,
                        },
                        {
                            role: towPilotRole,
                            numPeople: 1,
                        },
                        {
                            role: maintenanceRole,
                            numPeople: 2,
                        },
                    ]
                },
                {
                    type: ShiftType.Morning,
                    duties: [
                        {
                            role: fieldResponsibleRole,
                            numPeople: 1,
                        },
                        {
                            role: responsibleCfiRole,
                            numPeople: 1,
                        },
                        {
                            role: towPilotRole,
                            numPeople: 1,
                        },
                    ]
                },
            ]
        });
    }

    // Create Field Responsibles
    const fieldResponsibles = await Promise.all([
        'Joe Daniels',
        'Danny Nolazco',
        'Christina Purvis',
        'Helen Hayes',
        'Vernon Smith',
        'Gladys Arnold',
        'Michael Georges',
        'Barbara Proctor',
        'Jerome Scrudato',
        'Susan Lopez'
    ].map(name => name.split(' ')).map(([firstName, lastName], i) => createMember({
        firstName,
        lastName,
        email: `${firstName}.${lastName}${i}@example.com`,
        mobilePhone: `12345678${i}`,
        roles: [fieldResponsibleRole]
    })))

    // Create Maintenance Persons
    const maintenancePersons = await Promise.all([
        'Diana Cody',
        'William Patock',
        'Annette Entrekin',
        'Natasha Almodovar',
        'Karen Arabian',
        'Theresa Derringer',
        'Nikki Meza',
        'Catherine Richmond',
        'Yvonne Red',
        'Dawn Norman',
    ].map(name => name.split(' ')).map(([firstName, lastName], i) => createMember({
        firstName,
        lastName,
        email: `${firstName}.${lastName}${i}@example.com`,
        mobilePhone: `22345678${i}`,
        roles: [maintenanceRole]
    })))

    // Create Responsible CFIs
    const responsibleCfis = await Promise.all([
        'Jaime Keyes',
        'Larry Sanchez',
        'Thu Smith',
        'Vickie Emmert',
        'Judith Jenkins',
        'Paul Anderton',
        'Kathy Francis',
        'Heather Trias',
        'Fred Adams',
        'Grace Derr',
        'Lillie Dargis',
        'Bertha Nielsen',
    ].map(name => name.split(' ')).map(([firstName, lastName], i) => createMember({
        firstName,
        lastName,
        email: `${firstName}.${lastName}${i}@example.com`,
        mobilePhone: `32345678${i}`,
        roles: [responsibleCfiRole]
    })))

    // Create Tow Pilots
    const towPilots = await Promise.all([
        'Kathy Francis',
        'Heather Trias',
        'Fred Adams',
        'Grace Derr',
        'Lillie Dargis',
        'Bertha Nielsen',
        'Ann Smith',
        'Jo Howard',
        'Eric Lail',
        'Olive Lance',
        'Kimberly Davis',
        'Ronda Towe',
        'Phyllis Braud',
    ].map(name => name.split(' ')).map(([firstName, lastName], i) => createMember({
        firstName,
        lastName,
        email: `${firstName}.${lastName}${i}@example.com`,
        mobilePhone: `42345678${i}`,
        roles: [towPilotRole]
    })))

    const allMembers = [
        ...fieldResponsibles,
        ...maintenancePersons,
        ...responsibleCfis,
        ...towPilots,
    ]

    // Create some preferences
    await createMemberAssignmentPreference({
        memberName: "Joe Daniels",
        type: MemberAssignmentPreferenceType.Unavailable,
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-06-15"),
    })

    await createMemberAssignmentPreference({
        memberName: "Diana Cody",
        type: MemberAssignmentPreferenceType.Unavailable,
        startDate: new Date("2023-03-04"),
        endDate: new Date("2023-05-15"),
    })

    await createMemberAssignmentPreference({
        memberName: "Jaime Keyes",
        type: MemberAssignmentPreferenceType.Unavailable,
        startDate: new Date("2023-10-01"),
        endDate: new Date("2023-11-14"),
    })

    await createMemberAssignmentPreference({
        memberName: "Kathy Francis",
        type: MemberAssignmentPreferenceType.Unavailable,
        startDate: new Date("2023-02-01"),
        endDate: new Date("2023-08-15"),
    })


    // Club gliders
    await createGlider({
        callSign: "N4XGAA",
        owners: [],
    });
    await createGlider({
        callSign: "N4XGAB",
        owners: [],
    });
    await createGlider({
        callSign: "N4XGAC",
        owners: [],
    });
    await createGlider({
        callSign: "N4XGAD",
        owners: [],
    });
    await createGlider({
        callSign: "N4XGAE",
        owners: [
            allMembers[0],
            allMembers[11],
        ],
    });
    await createGlider({
        callSign: "N4XGAF",
        owners: [
            allMembers[1],
        ],
    });
    await createGlider({
        callSign: "N4XGAG",
        owners: [
            allMembers[20],
            allMembers[21],
        ],
    });

    logger.info("Finished creating seed data");
}
