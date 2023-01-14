FROM node:14

WORKDIR /app/server
COPY . .

RUN yarn

ENTRYPOINT ["yarn", "start-prod"]