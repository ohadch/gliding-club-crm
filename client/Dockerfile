FROM node:16.15-alpine AS base

# Add a work directory
WORKDIR /app

# Infra
RUN apk update
RUN apk add git
RUN git config --global url."https://".insteadOf git://

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --network-timeout 1000000

# Copy app files
COPY . .

FROM base AS development

# Start the app
CMD [ "yarn", "start" ]

FROM base AS build

# Build app
RUN yarn build

# Start the app
CMD [ "yarn", "serve:build" ]
