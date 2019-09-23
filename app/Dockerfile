FROM node:10
RUN npm install http-server -g
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --production
COPY . /usr/src/app
CMD ["http-server", "/usr/src/app"]
EXPOSE 8080