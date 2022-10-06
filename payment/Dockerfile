FROM node:16
WORKDIR /opt/docker_app/payment
COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.dev ./.env
EXPOSE 5002
CMD [ "node", "index.js" ]