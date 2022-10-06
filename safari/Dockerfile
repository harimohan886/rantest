FROM node:16
WORKDIR /opt/docker_app/safari
COPY package.json /opt/docker_app/safari
RUN npm install
COPY . /opt/docker_app/safari
COPY ./.env.dev /opt/docker_app/safari/.env
EXPOSE 5003
CMD [ "node", "index.js" ]