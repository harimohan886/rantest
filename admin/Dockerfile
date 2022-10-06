FROM node:16
WORKDIR /opt/docker_app/admin
COPY package.json /opt/docker_app/admin
RUN npm install
COPY . /opt/docker_app/admin
COPY ./.env.dev /opt/docker_app/admin/.env
EXPOSE 5005
CMD [ "node", "index.js" ]