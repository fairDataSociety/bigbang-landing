#build
FROM node:lts as build

WORKDIR /base
#COPY app/yarn.lock .
COPY app/*.json ./
RUN npm install --legacy-peer-deps 
COPY app/ .
RUN npm run build

#webserver
FROM nginx:stable-alpine
ARG BUILD_CONTEXT
COPY --from=build /base/build /usr/share/nginx/html
RUN echo "real_ip_header X-Forwarded-For;" \
    "real_ip_recursive on;" \
    "set_real_ip_from 0.0.0.0/0;" > /etc/nginx/conf.d/ip.conf
RUN sed -i '/index  index.html index.htm/c\        try_files $uri $uri/ =404;' /etc/nginx/conf.d/default.conf
RUN if [ -f /usr/share/nginx/html/404.html ]; then sed -i 's/#error_page/error_page/g' /etc/nginx/conf.d/default.conf; fi
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
