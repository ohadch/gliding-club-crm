import {setUpConnectionForAllResources} from "../../config/db";
import {GlidersQueueService} from "./index";

describe('GlidersQueueService', () => {
    before(async () => {
        await setUpConnectionForAllResources();
    })

    describe('generateQueueOrderNumbersForMembers', () => {
        it('Should generate queue order numbers', async () => {
            await GlidersQueueService.generateQueueOrderNumbersForMembers();
        })
    })

    // describe('generateMemberRanks', () => {
    //     it('Should generate ranks', async () => {
    //         const numReservedSpots = 4;
    //         const ranks = await GlidersQueueService.generateMemberRanks(numReservedSpots);
    //         expect(ranks).to.have.length.above(0);
    //     })
    // })
})