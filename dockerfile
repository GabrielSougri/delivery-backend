FROM node:24.1.0-alpine3.20 
WORKDIR /app/
RUN npm install
COPY package*.json /app/
COPY . /app/
RUN npm run build
CMD [ "npm", "run", "start:prod" ]
