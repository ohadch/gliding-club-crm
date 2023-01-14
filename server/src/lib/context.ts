import { AuthenticationError } from 'apollo-server-express'

// Context user for Apollo graphQl requests.
export class Context {
    constructor(
        // The User identifier.
        public user: string,
        // The User's roles.
        public roles: string[]
    ) {
    }

    // Checks if the logged in user is an admin.
    // If not throws an anauthorized error.
    public allowOnlyAdmin() {
        if (!this.roles.includes('admin')) {
            throw new AuthenticationError('Unauthorized non-admin user');
        }
    }
}
