import {setUpConnectionForAllResources} from "../../config/db";
import {GlidersQueueService} from "./index";
import {createSeedData} from "../seed";

describe('GlidersQueueService', () => {
    before(async () => {
        await setUpConnectionForAllResources();
        await createSeedData();
    })
})