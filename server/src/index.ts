import 'reflect-metadata';

import {createConnection} from 'typeorm';
import {buildSchema} from 'type-graphql';
import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';

import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import {Database, Resource} from '@admin-bro/typeorm';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import {Member, MemberResolver} from './models/Member';
import {Shift, ShiftResolver} from './models/Shift';
import {MemberPreference, MemberPreferenceResolver} from './models/MemberPreference';
import {Role, RoleResolver} from './models/Role';
import {Duty, DutyResolver} from './models/Duty';
import {Action, ActionResolver} from './models/Action';
import {Glider, GliderResolver} from './models/Glider';
import {getLogger} from "./services/logging";
import {Context} from './lib/context';
import {
    DB_TYPE,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    DB_PORT,
} from './config'

const log = getLogger('server');
const SKIP_AUTH = true; // TODO: set to false.

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

// Authenticates requests with auth0. Not used for root path "/".
const authMiddleware = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-wpwqa405.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost',
    issuer: 'https://dev-wpwqa405.us.auth0.com/',
    algorithms: ['RS256'],
    credentialsRequired: false,
}).unless({path: ['/', '/admin']});

// Logs request method, path and logged in user.
const logMiddleware = (req: any, resp: any, next: any) => {
    if (req.path === '/') {
        return next();
    }
    log.info(`REQ [user ${req.user?.sub}] ${req.method} ${req.path}`);
    next();
};

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
    if (!SKIP_AUTH) {
        app.use(authMiddleware);
    }
    app.use(logMiddleware);

    // Set root response.
    app.get('/', (req, res) => {
        res.send('Gliding Club CRM');
    });

    // Collect members from database.
    const members = new Map((await Member.find({
        select: ['id', 'authId', 'firstName', 'lastName', 'email'],
        relations: ['roles'],
    })).map(member => [member.authId, member]));

    // TODO: remove. This is a temporary hack since we don't have an admin
    // role - add the admin role to all members.
    const admin = await Role.create({name: 'admin'});
    members.forEach(member => {
        member.roles = [admin];
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
        context: ({req}) => {
            if (SKIP_AUTH) {
                return new Context('moshe', ['admin']);
            }
            // Set user ID in Apollo context from the user property set by the
            // auth0 middleware.
            const authId = (req as any).user?.sub;
            // Get the member that is stored in the database according to the authId.
            const member = members.get(authId);
            return new Context(
                authId,
                (member?.roles ?? []).map(role => role.name),
            );
        },
    });
    app.use(apolloServer.getMiddleware({path: GRAPHQL_ENDPOINT}));

    app.listen({port: PORT}, () => {
        const url = `http://localhost:${PORT}`;
        log.info(`🚀 Apollo server is listening on ${url}${GRAPHQL_ENDPOINT}`);
        log.info(`👩‍💻 Admin is listening on ${url}${ADMIN_ENDPOINT}`);
    });
}

main().then();
