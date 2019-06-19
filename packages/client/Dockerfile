# This Dockerfile is meant to be run via docker-compose and its context api. 
# Placing our build context at the monorepo root allows us access to files 
# as high as the root directory and in other local packages.

# build environment
FROM node as builder

COPY . /usr/src/web
WORKDIR /usr/src/web
RUN npm i -g yarn
RUN yarn install
ENV PATH /usr/src/web/node_modules/.bin:$PATH
RUN yarn build:client


# production environment
FROM nginx:alpine

COPY ./nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/web/packages/client/build /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

