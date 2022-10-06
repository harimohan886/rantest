FROM node:16
WORKDIR /opt/docker_app/chambal
COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.dev ./.env
EXPOSE 5006
CMD [ "node", "index.js" ]