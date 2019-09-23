FROM zhaodesheng/todolistmvc:tagname
RUN mkdir /todolistapp_docker
ADD . /todolistapp_docker
WORKDIR /todolistapp_docker/app
RUN npm i
WORKDIR /todolistapp_docker/server
RUN npm i
EXPOSE 3001
CMD ["npm", "start"]