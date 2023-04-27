import _ from "lodash";
import { GliderReservationQueueCycle } from "../../models/GliderReservationQueueCycle";
import {
  GLIDER_RESERVATION_QUEUE_SPACING_GROUP_RELATIONS,
  GliderReservationQueueSpacingGroup
} from "../../models/GliderReservationQueueSpacingGroup";
import { GliderReservationQueueCycleMemberNumber } from "../../models/GliderReservationQueueCycleMemberNumber";
import { getLogger } from "../logging";

const logger = getLogger("GliderReservationQueueCreationService");

export class GliderReservationQueueCreationService {
  /**
   * Create a glider reservation queue cycle for all the members.
   * @param name - The name of the glider reservation queue cycle.
   * @returns The created glider reservation queue cycle.
   */
  public static async createGliderReservationQueueCycle(name: string): Promise<GliderReservationQueueCycle> {
    logger.info(`Creating glider reservation queue cycle ${name}`);

    const spacingGroups = await GliderReservationQueueSpacingGroup.find({
      relations: GLIDER_RESERVATION_QUEUE_SPACING_GROUP_RELATIONS,
    });

    logger.debug(`Found ${spacingGroups.length} spacing groups`);

    const totalMembers = spacingGroups.map(group => group.members).reduce(
      (totalMembers, members) => totalMembers + members.length, 0
    );

    const emptyMembersNumbers: number[] = Array(totalMembers).fill(0).map((_, index) => index + 1);
    const membersNumbers: GliderReservationQueueCycleMemberNumber[] = [];

    logger.debug(`Found ${totalMembers} members`);

    // The membersNumber are circular. Aka the last memberNumber is close to the first memberNumber.
    // Spread the membersNumbers so that the members of each spacing group are spread evenly,
    // as far as possible from each other.
    for (const spacingGroup of spacingGroups) {
      const groupMembers = _.shuffle(spacingGroup.members);
      const spacing = Math.ceil(totalMembers / groupMembers.length);

      logger.info(`Spacing group ${spacingGroup.name} has ${groupMembers.length} members and spacing ${spacing}`);

      // If there are no more empty membersNumbers, throw an error.
      let currentNumber = emptyMembersNumbers.shift();
      if (!currentNumber) {
        throw new Error('Failed to shift number');
      }

      for (const member of groupMembers) {
        // Create a memberNumber for the current member.
        const memberNumber = new GliderReservationQueueCycleMemberNumber();
        memberNumber.member = member;
        memberNumber.number = currentNumber;

        // Advance the currentNumber by the spacing.
        currentNumber += spacing;
      }
    }

    // Create the glider reservation queue cycle.
    const gliderReservationQueueCycle = new GliderReservationQueueCycle();
    gliderReservationQueueCycle.name = name;
    gliderReservationQueueCycle.membersNumbers = membersNumbers;
    await gliderReservationQueueCycle.save();

    return gliderReservationQueueCycle;
  }
}
