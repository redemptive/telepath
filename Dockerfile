FROM node:10

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g serve

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run-script build

EXPOSE 5000

CMD [ "serve", "-s", "build" ]