# Stage 1: Build the React app
FROM node:16-alpine as build

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json files first
COPY package*.json ./

# Install dependencies, including ajv and ajv-keywords, using --force to handle dependency conflicts
RUN npm install ajv@^6 ajv-keywords@^3 --save --force && npm install --legacy-peer-deps --force

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:1.17.8-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

