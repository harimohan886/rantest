FROM nginx

COPY /opt/docker_app/client/frontend/build /usr/share/nginx/html

RUN rm /etc/nginx/nginx.conf 

COPY nginx.conf /etc/nginx/nginx.conf