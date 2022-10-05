FROM node:16
WORKDIR /opt/docker_app/hotel
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node", "index.js" ]