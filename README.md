# Gliding Club CRM

CRM for managing a gliding club.

## Automatically Assigning Members to Shifts
The nice feature here is the ability to automatically assign members to duties while keeping a correct load distribution between the members, and taking members' assignment preferences into account at the same time.

![Screen Recording 2023-01-15 at 17 36 29](https://user-images.githubusercontent.com/17769668/212550670-f974eccf-66f8-468a-834d-84fee9ab42d9.gif)

## Local Development

### Prerequisites for development
- `Node.js v16`
- `docker`
- `docker-compose`
- `yarn`

### Set up the project

```shell
make install-dev
```

### Configure Webstorm (optional)

#### Create a mocha configuration for unit testing
1. Create a mocha configuration
2. Set `<root>/server` as the working directory
3. In `Extra mocha options`: `--require ts-node/register`
4. Select `File Patterns`
5. In `Test File Patterns`: `{,!(node_modules)/**}/*.test.ts` [Why excluding node modules is necessary](https://stackoverflow.com/questions/67374553/syntaxerror-cannot-use-import-statement-outside-a-module-error-is-thrown-while/67820331#67820331)


## Other forms of deployment

### Docker

```shell
docker-compose up -d

# Or

make up
```

### Kubernetes (local)

```shell
make local-registry-up
docker-compose build
docker-compose push
make up-k8s
```

