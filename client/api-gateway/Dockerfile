FROM node:16
WORKDIR /opt/docker_app/client/api-gateway
COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.dev ./.env
EXPOSE 5004
CMD [ "node", "index.js" ]