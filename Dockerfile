FROM node:18.18.0 as build
WORKDIR /build
ENV PATH /build/node_modules/.bin:$PATH
ADD . /build
RUN yarn install
RUN yarn web:build

FROM nginx:1.21.3-alpine
COPY --from=build /build/packages/web/build /opt/web
RUN rm /etc/nginx/conf.d/default.conf
ADD nginx/nginx.conf /etc/nginx
ADD nginx/conf.d/ /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
