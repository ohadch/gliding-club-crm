import 'reflect-metadata';

import {createConnection} from 'typeorm';
import {buildSchema} from 'type-graphql';
import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';

import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import {Database, Resource} from '@admin-bro/typeorm';
import {Member, MemberResolver} from './models/Member';
import {Shift, ShiftResolver} from './models/Shift';
import {MemberPreference, MemberPreferenceResolver} from './models/MemberPreference';
import {Role, RoleResolver} from './models/Role';
import {Duty, DutyResolver} from './models/Duty';
import {Action, ActionResolver} from './models/Action';
import {Glider, GliderResolver} from './models/Glider';
import {getLogger} from "./services/logging";
import {
    DB_TYPE,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    DB_PORT, CREATE_SEED_DATA,
} from './config'
import {createSeedData} from "./services/seed";
import {GliderDailyQueueMemberRank} from "./models/GliderDailyQueueMemberRank";

const logger = getLogger('server');

AdminBro.registerAdapter({Database, Resource});

const PORT = 4000;
const GRAPHQL_ENDPOINT = '/graphql';
const ADMIN_ENDPOINT = '/admin';

const RESOURCES = [
    Action,
    Duty,
    Glider,
    Member,
    MemberPreference,
    Role,
    Shift,
    GliderDailyQueueMemberRank
];

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
    const connection = await createConnection({
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
    const app = express();

    RESOURCES.forEach((model) => model.useConnection(connection));

    app.use(cors());

    // Set root response.
    app.get('/', (req, res) => {
        res.send('Gliding Club CRM');
    });

    // Mount admin bro API.
    const adminBro = AdminBroExpress.buildRouter(new AdminBro({
        resources: RESOURCES.map((resource) => ({resource})),
        rootPath: ADMIN_ENDPOINT,
    }));
    app.use(ADMIN_ENDPOINT, adminBro);

    // Mount graphql API.
    const apolloServer = new ApolloServer({
        schema: await graphQlSchema(),
        playground: true,
    });
    app.use(apolloServer.getMiddleware({path: GRAPHQL_ENDPOINT}));

    // Create seed data if needed
    if (CREATE_SEED_DATA) {
        logger.info('Creating seed data');
        await createSeedData();
    } else {
        logger.info('Not creating seed data');
    }

    app.listen({port: PORT}, () => {
        const url = `http://localhost:${PORT}`;
        logger.info(`🚀 Apollo server is listening on ${url}${GRAPHQL_ENDPOINT}`);
        logger.info(`👩‍💻 Admin is listening on ${url}${ADMIN_ENDPOINT}`);
    });
}

main().then();
