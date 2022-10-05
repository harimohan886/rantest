FROM node:16
WORKDIR /opt/docker_app/admin
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 5005
CMD [ "node", "index.js" ]