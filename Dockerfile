FROM node:lts-alpine as build-stage
 
WORKDIR /src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3000
 
CMD [ "npm", "run", "dev" ]
