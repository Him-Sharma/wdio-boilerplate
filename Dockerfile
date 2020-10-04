FROM node:14

WORKDIR /usr/test

ADD ./package.json package.json
ADD ./package-lock.json package-lock.json
# RUN apt-get install -y build-essential

RUN npm install
ADD ./jsconfig.json ./
ADD ./.eslintrc.js ./
ADD ./wdio.conf.js ./
ADD ./baseline baseline ./
ADD ./src src