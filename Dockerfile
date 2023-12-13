FROM alpine:3.14

RUN apk update && apk add nodejs-current nodejs-dev yarn git tzdata && mkdir /app

RUN apk update

RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

RUN echo "America/Sao_Paulo" > /etc/timezone

RUN apk del tzdata

WORKDIR /app

COPY . /app/

RUN yarn install --fozen-lockfile

RUN yarn build

ENTRYPOINT [ "/bin/sh", "-c", "yarn start:prod" ]