FROM node:14.4.0-slim

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]
