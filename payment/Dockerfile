FROM node:16
WORKDIR /opt/docker_app/payment
COPY package.json /opt/docker_app/payment
RUN npm install
COPY . /opt/docker_app/payment
COPY ./.env.dev /opt/docker_app/payment/.env
EXPOSE 5002
CMD [ "node", "index.js" ]