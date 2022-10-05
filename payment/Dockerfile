FROM node:16
WORKDIR /opt/docker_app/payment
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5002
CMD [ "node", "index.js" ]