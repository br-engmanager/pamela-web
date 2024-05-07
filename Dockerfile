# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node:12.0.0-slim as node
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.19-alpine
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
#COPY ./assetlinks.json /usr/share/nginx/html/assetlinks.json
