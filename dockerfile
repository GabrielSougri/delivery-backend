FROM node:22.15.1-alpine3.20
WORKDIR /app
COPY /package*.json /app/
RUN npm install
COPY . /app/
CMD [ "npm", "run", "start:dev" ]