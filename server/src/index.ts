import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import { Database, Resource } from '@admin-bro/typeorm';
import { MemberResolver } from './models/Member';
import { ShiftResolver } from './models/Shift';
import { MemberPreferenceResolver } from './models/MemberPreference';
import { RoleResolver } from './models/Role';
import { DutyResolver } from './models/Duty';
import { ActionResolver } from './models/Action';
import { GliderResolver } from './models/Glider';
import { getLogger } from "./services/logging";
import {
  CREATE_SEED_DATA,
} from './config';
import { createSeedData } from "./services/seed";
import { RESOURCES, setUpConnectionForAllResources } from "./config/db";

const logger = getLogger('server');

AdminBro.registerAdapter({ Database, Resource });

const PORT = 4000;
const GRAPHQL_ENDPOINT = '/graphql';
const ADMIN_ENDPOINT = '/admin';

async function graphQlSchema() {
  return buildSchema({
    dateScalarMode: 'isoDate',
    resolvers: [
      ActionResolver,
      DutyResolver,
      GliderResolver,
      MemberResolver,
      MemberPreferenceResolver,
      RoleResolver,
      ShiftResolver,
    ],
  });
}

async function main() {
  const app = express();

  await setUpConnectionForAllResources();

  app.use(cors());

  // Set root response.
  app.get('/', (req, res) => {
    res.send('Gliding Club CRM');
  });

  // Mount admin bro API.
  const adminBro = AdminBroExpress.buildRouter(new AdminBro({
    resources: RESOURCES.map((resource) => ({ resource })),
    rootPath: ADMIN_ENDPOINT,
  }));
  app.use(ADMIN_ENDPOINT, adminBro);

  // Mount graphql API.
  const apolloServer = new ApolloServer({
    schema: await graphQlSchema(),
    playground: true,
  });
  app.use(apolloServer.getMiddleware({ path: GRAPHQL_ENDPOINT }));

  // Create seed data if needed
  if (CREATE_SEED_DATA) {
    logger.info('Creating seed data');
    await createSeedData();
  } else {
    logger.info('Not creating seed data');
  }

  app.listen({ port: PORT }, () => {
    const url = `http://localhost:${PORT}`;
    logger.info(`🚀 Apollo server is listening on ${url}${GRAPHQL_ENDPOINT}`);
    logger.info(`👩‍💻 Admin is listening on ${url}${ADMIN_ENDPOINT}`);
  });
}

main().then();
