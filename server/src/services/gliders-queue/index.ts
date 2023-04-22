import {
    GLIDER_DAILY_QUEUE_MEMBER_RANK_RELATIONS,
    GliderDailyQueueMemberRank
} from "../../models/GliderDailyQueueMemberRank";

export class GlidersQueueService {
    static async getQueueForDay(date: Date): Promise<GliderDailyQueueMemberRank[]> {
        return await GliderDailyQueueMemberRank.find({
            where: {
                date
            },
            relations: GLIDER_DAILY_QUEUE_MEMBER_RANK_RELATIONS
        });
    }

    static async createQueueForDay(date: Date): Promise<GliderDailyQueueMemberRank[]> {

    }


}