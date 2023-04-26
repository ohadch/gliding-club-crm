import { Member, MEMBER_RELATIONS } from "../../models/Member";
import { getLogger } from "../logging";
import { GliderReservationQueueSpacingGroup } from "../../models/GliderReservationQueueSpacingGroup";

const logger = getLogger('GlidersQueueService');

export class GliderReservationsQueueSpacingGroupsService {
  /**
     * Returns the spacing groups for the given members.
     * @param members - The members to determine spacing groups for.
     * @returns The spacing groups for the given members.
     */
  private static determineSpacingGroupsByMembers(members: Member[]): {[key: string]: Member[]} {
    const highestGliderEndorsementComplexityToMembersMap: {[key: string]: Member[]} = {};

    for (const member of members) {
      const highestGliderComplexityEndorsementNumber = member.getHighestGliderEndorsementComplexity();
      const highestGliderComplexityEndorsementString = `Complexity ${highestGliderComplexityEndorsementNumber}`;

      if (!Object.keys(highestGliderEndorsementComplexityToMembersMap).includes(highestGliderComplexityEndorsementString)) {
        highestGliderEndorsementComplexityToMembersMap[highestGliderComplexityEndorsementString] = [];
      }

      highestGliderEndorsementComplexityToMembersMap[highestGliderComplexityEndorsementString].push(member);
    }

    return highestGliderEndorsementComplexityToMembersMap;
  }

  /**
     * Returns the spacing groups for all members.
     * @returns The spacing groups for all members.
     */
  private static async determineSpacingGroups(): Promise<{[key: string]: Member[]}> {
    const members = await Member.find({
      relations: MEMBER_RELATIONS,
    });

    return this.determineSpacingGroupsByMembers(members);
  }

  /**
     * Generates spacing groups by the given spec.
     * @param spacingGroupsSpec - The spec to generate spacing groups by.
     * @returns The generated spacing groups.
     */
  private static async generateSpacingGroupsBySpec(spacingGroupsSpec: {[key: string]: Member[]}): Promise<GliderReservationQueueSpacingGroup[]> {
    const spacingGroups: GliderReservationQueueSpacingGroup[] = [];

    for await (const [name, members] of Object.entries(spacingGroupsSpec)) {
      const spacingGroup = new GliderReservationQueueSpacingGroup();
      spacingGroup.name = name;
      spacingGroup.members = members;

      await spacingGroup.save();

      spacingGroups.push(spacingGroup);
    }

    return spacingGroups;
  }

  /**
     * Generates spacing groups.
     * @returns The generated spacing groups.
     */
  public static async generateSpacingGroups(): Promise<GliderReservationQueueSpacingGroup[]> {
    logger.info('Generating spacing groups for all members.');

    const spacingGroupsSpec = await this.determineSpacingGroups();
    const spacingGroups = await this.generateSpacingGroupsBySpec(spacingGroupsSpec);

    logger.info(`Generated ${spacingGroups.length} spacing groups.`);

    return spacingGroups;
  }
}
