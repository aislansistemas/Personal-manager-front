# Stage 1
FROM node as build
RUN npm install -g @angular/cli
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY ./ /app
RUN ng build

# Stage 2
FROM nginx
COPY --from=build /app/dist/PersonalManager-Front/ /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'