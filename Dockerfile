FROM node
WORKDIR /usr/src/app
ADD package.json ./
RUN npm i
ADD . .
EXPOSE 3000
CMD npm start
