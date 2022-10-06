FROM node:16
WORKDIR /opt/docker_app/hotel
COPY package.json /opt/docker_app/hotel
RUN npm install
COPY . /opt/docker_app/hotel
COPY ./.env.dev /opt/docker_app/hotel/.env
EXPOSE 5000
CMD [ "node", "index.js" ]