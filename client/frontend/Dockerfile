FROM node:16 as build
 
WORKDIR /opt/docker_app/client/frontend
 
COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY ./.env.dev ./.env

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx

COPY --from=build /opt/docker_app/client/frontend/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]