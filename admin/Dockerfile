FROM node:16
WORKDIR /opt/docker_app/admin
COPY ./package*.json ./
RUN npm install
COPY . .
COPY ./.env.dev ./.env
EXPOSE 5005
CMD [ "node", "index.js" ]