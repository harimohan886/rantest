FROM node:16
WORKDIR /opt/docker_app/chambal
COPY package.json /opt/docker_app/chambal
RUN npm install
COPY . /opt/docker_app/chambal
COPY ./.env.dev /opt/docker_app/chambal/.env
EXPOSE 5006
CMD [ "node", "index.js" ]