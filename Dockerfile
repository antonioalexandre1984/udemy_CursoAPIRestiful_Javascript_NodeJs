FROM node:16.13.0-alpine3.12

RUN apk add --no-cache bash

USER node_modules

WORKDIR /home/node/app

