import { createConnection } from "typeorm";
import {
  DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USER
} from "./index";
import { Action } from "../models/Action";
import { Duty } from "../models/Duty";
import { Glider } from "../models/Glider";
import { Member } from "../models/Member";
import { MemberPreference } from "../models/MemberPreference";
import { Role } from "../models/Role";
import { Shift } from "../models/Shift";
import { GliderReservationQueueSpacingGroup } from "../models/GliderReservationQueueSpacingGroup";
import { GliderReservationQueueCycleMemberNumber } from "../models/GliderReservationQueueCycleMemberNumber";
import { GliderReservationQueueCycle } from "../models/GliderReservationQueueCycle";

export const databaseConnectionFactory = () => createConnection({
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [
    "./src/models/**/*.model.ts"
  ],
  synchronize: true,
});

export const RESOURCES = [
  Action,
  Duty,
  Glider,
  Member,
  MemberPreference,
  Role,
  Shift,
  GliderReservationQueueCycle,
  GliderReservationQueueSpacingGroup,
  GliderReservationQueueCycleMemberNumber
];

export async function setUpConnectionForAllResources() {
  const connection = await databaseConnectionFactory();
  RESOURCES.forEach(resource => {
    resource.useConnection(connection);
  });
}
