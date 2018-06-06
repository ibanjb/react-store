# base image
FROM node:9.6.1
ENV NODE_ENV production

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# copy source code
COPY . /usr/src/app

# install and cache app dependencies
RUN npm install react-scripts -g --silent
RUN npm install --production --silent

# start app
CMD npm start

EXPOSE 3000