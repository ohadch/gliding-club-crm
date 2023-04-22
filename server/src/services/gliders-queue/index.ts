import {Member, MEMBER_RELATIONS} from "../../models/Member";
import {getLogger} from "../logging";
import * as _ from 'lodash';

const logger = getLogger('GlidersQueueService');

export class GlidersQueueService {

    /**
     * Generates queue orders for members
     */
    public static async generateQueueOrderNumbersForMembers() {
        logger.info('Generating queue order numbers for members');

        const members = await Member.find({
            relations: MEMBER_RELATIONS
        });

        const membersWithoutQueueOrderNumber = members.filter(member => !member.queueOrderNumber);
        const membersWithQueueOrderNumber = members.filter(member => member.queueOrderNumber);
        const occupiedQueueOrderNumbers = membersWithQueueOrderNumber.map(member => member.queueOrderNumber);
        const freeQueueOrderNumbers = _.range(1, members.length + 1)
            .filter(queueOrder => !occupiedQueueOrderNumbers.includes(queueOrder));

        logger.info(`Found ${membersWithoutQueueOrderNumber.length} members without queue orders`);

        const shuffledMembersWithoutQueueOrderNumber = _.shuffle(membersWithoutQueueOrderNumber);

        for (let i = 0; i < shuffledMembersWithoutQueueOrderNumber.length; i++) {
            const member = shuffledMembersWithoutQueueOrderNumber[i];
            member.queueOrderNumber = freeQueueOrderNumbers[i];
            await member.save();
        }

        logger.info(`Generated queue orders for ${membersWithoutQueueOrderNumber.length} members`);
    }


    // /**
    //  * Generates ranks for members
    //  * @param numReservedSpots - The number of reserved spots to add to the queue
    //  */
    // static async generateMemberRanks(numReservedSpots: number = 0) : Promise<GlidersReservationQueueMemberRank[]> {
    //     const existingRanks = await GlidersReservationQueueMemberRank.find();
    //     if (existingRanks.length > 0) {
    //         throw new Error('Cannot generate ranks when ranks already exist');
    //     }
    //
    //     logger.info(`Generating ranks for members with ${numReservedSpots} reserved spots`);
    //
    //     const members: (Member| null)[] = await Member.find({
    //         relations: MEMBER_RELATIONS
    //     });
    //
    //     logger.info(`Found ${members.length} members to generate ranks for`);
    //
    //
    //
    //     if (numReservedSpots > 0) {
    //         // Evenly distribute the reserved spots across the members array
    //         for (let i = 0; i < numReservedSpots; i++) {
    //             shuffledMembers.splice(i * (shuffledMembers.length / numReservedSpots), 0, null);
    //         }
    //     }
    //
    //     // Generate ranks
    //     const ranks = shuffledMembers.map((member, index) => {
    //         const rank = new GlidersReservationQueueMemberRank();
    //         rank.rank = index + 1;
    //
    //         if (member) {
    //             rank.member = member;
    //         }
    //
    //         return rank;
    //     });
    //
    //     return await GlidersReservationQueueMemberRank.save(ranks);
    // }

}