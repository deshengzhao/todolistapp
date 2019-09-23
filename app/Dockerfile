FROM node:10
RUN mkdir -p /todolistapp_docker/app
WORKDIR /todolistapp_docker/app
COPY package.json /todolistapp_docker/app
RUN npm cache verify
RUN npm install
COPY . /todolistapp_docker/app
#WORKDIR /todolistapp_docker/app
#RUN npm install
EXPOSE 8080
CMD ["ng", "serve"]