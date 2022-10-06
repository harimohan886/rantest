FROM node:16
WORKDIR /opt/docker_app/client/api-gateway
COPY package.json /opt/docker_app/client/api-gateway
RUN npm install
COPY . /opt/docker_app/client/api-gateway
COPY ./.env.dev /opt/docker_app/client/api-gateway/.env
EXPOSE 5004
CMD [ "node", "index.js" ]