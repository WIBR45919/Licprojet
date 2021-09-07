FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build
COPY . .
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -fr ./*
COPY --from=builder /app/dist/licenceiut .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
