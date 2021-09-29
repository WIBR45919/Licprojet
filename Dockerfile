FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build
COPY . .
FROM nginx:alpine
WORKDIR /var/www/html
RUN rm -fr ./*
COPY --from=builder /app/dist/licenceiut /var/www/html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
