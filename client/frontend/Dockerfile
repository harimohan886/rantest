FROM node:16
 
WORKDIR /opt/docker_app/client/frontend
 
COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .
 
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]