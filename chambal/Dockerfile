FROM node:16
WORKDIR /opt/docker_app/chambal
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5006
CMD [ "node", "index.js" ]