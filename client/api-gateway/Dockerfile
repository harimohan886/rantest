# api-gateway Dockerfile
FROM node:16

WORKDIR /app/client/api-gateway

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the environment file
COPY ./.env.dev ./.env

EXPOSE 5004

CMD [ "node", "index.js" ]

