FROM mhart/alpine-node:8

RUN mkdir -p ./frontend

WORKDIR ./frontend

EXPOSE 3000
