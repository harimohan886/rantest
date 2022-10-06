FROM node:16
WORKDIR /opt/docker_app/hotel
COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.dev ./.env
EXPOSE 5000
CMD [ "node", "index.js" ]