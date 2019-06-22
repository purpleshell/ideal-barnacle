FROM node as builder

WORKDIR /server

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/package.json
COPY ./packages/common/package.json ./packages/common/package.json

RUN npm i -g yarn
RUN yarn install --production
RUN yarn build:server


FROM node:alpine


