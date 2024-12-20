FROM node:14 AS base

WORKDIR /app/server
COPY . .

RUN yarn

FROM base AS development

WORKDIR /app/server

CMD ["yarn", "start"]

FROM base AS build

WORKDIR /app/server

ENTRYPOINT ["yarn", "start-prod"]