FROM node:16
WORKDIR /opt/docker_app/api-gateway
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5004
CMD [ "node", "index.js" ]