import { setUpConnectionForAllResources } from "../../config/db";
import { createSeedData } from "../seed";

describe('GlidersQueueService', () => {
  before(async () => {
    await setUpConnectionForAllResources();
    await createSeedData();
  });
});
