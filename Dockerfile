FROM node:22-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY ./src /app/src
CMD npm run dev