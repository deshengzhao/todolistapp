FROM node
RUN mkdir -p /todolistapp_docker/server
ADD . /todolistapp_docker/server
WORKDIR /todolistapp_docker/server
RUN npm i
EXPOSE 3001
CMD ["node", "index.js"]