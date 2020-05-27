FROM node
WORKDIR /usr/src/app
ADD package.json ./
RUN npm i -g nodemon
RUN npm i
ADD . .
EXPOSE 3000
CMD nodemon start
