FROM node:16
WORKDIR /opt/docker_app/package
COPY package.json /opt/docker_app/package
RUN npm install
COPY . /opt/docker_app/package
COPY ./.env.dev /opt/docker_app/package/.env
EXPOSE 5001
CMD [ "node", "index.js" ]