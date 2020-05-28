FROM node:alpine AS nodeBuilding
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i -g nodemon
COPY . .
EXPOSE 5000
CMD ["nodemon", "start"]