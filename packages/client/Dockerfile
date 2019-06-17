# This Dockerfile is meant to be run via docker-compose and its context api. 
# Placing our build context at the monorepo root allows us access to files 
# as high as the root directory and in other local packages.

# build environment
FROM node as builder

RUN mkdir /usr/src/client
WORKDIR /usr/src/client
COPY package.json /package.json
COPY /client/package.json /usr/src/client/package.json
COPY /common/package.json /usr/src/common/package.json
RUN npm i -g yarn
RUN yarn install
ENV PATH /usr/src/client/node_modules/.bin:$PATH
COPY . /usr/src/client
RUN lerna build:client


# production environment
FROM nginx:1.13.9-alpine

COPY --from=builder /usr/src/client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]