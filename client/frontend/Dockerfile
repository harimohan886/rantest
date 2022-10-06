FROM node:16
 
WORKDIR /opt/docker_app/client/frontend
 
COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .
 
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx

COPY --from=build-stage /opt/docker_app/client/frontend/build /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]