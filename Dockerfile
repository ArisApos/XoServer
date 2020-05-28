FROM node:alpine AS nodeBuilding
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i -g nodemon
RUN npm i
COPY . .
EXPOSE 5000
CMD ["nodemon", "start"]