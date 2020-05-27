FROM node
WORKDIR /usr/src/app
ADD package.json ./
RUN npm i -g nodemon
RUN npm i
ADD . .
EXPOSE 5000
CMD nodemon -L start
