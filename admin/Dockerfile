FROM node:16
WORKDIR /app/admin
COPY package.json /app/admin
RUN npm install
COPY . /app/admin
COPY ./.env.dev /app/admin/.env
EXPOSE 5005
CMD [ "node", "index.js" ]