FROM node:18.16.0-slim AS base
WORKDIR /app

FROM base AS dev
RUN apt update && \
    apt install -y git fish vim && \
    chsh -s /usr/bin/fish node

FROM base AS build
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable AS deploy
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
