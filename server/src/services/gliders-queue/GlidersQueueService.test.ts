import {GlidersQueueService} from "./index";
import {expect} from "chai";
import {setUpConnectionForAllResources} from "../../config/db";

describe('GlidersQueueService', () => {
    before(async () => {
        await setUpConnectionForAllResources();
    })

    describe('getQueueForDay', () => {
        it('should return the queue for the given day', async () => {
            const queue = await GlidersQueueService.getQueueForDay(new Date());
            expect(queue).to.be.an('array');
        });
    })
})