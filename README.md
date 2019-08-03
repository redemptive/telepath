## Title

Telepath

## Description

A Node app using react. Designed to consume my telepath-api project.

Provides a front end for a workplace productivity app. In development but currently demonstrates the following:

- Session authentication with JSON web tokens
- API calls with react's `fetch` method
- Higher order functions protecting authenticated routes
- React-router

## Technologies

This project is designed to run as part of the MERN stack. I love this architecture! The MERN stack is easy to provision and also to containerise.

- MongoDB
- Express (Used in my telepath-api project)
- React
- Node (In both this project and the api)

## Installation and Usage

### Docker-compose (By far the easiest way)

This will build the full three tier application with an nginx proxy container sitting up front on port 80.

All requests MUST go through nginx as the other containers all use non-forwarded ports to increase security.

This is a dev architecture, there is a shared volume with the app container. Edit some code in the repo and it will update in the containers immediately!

#### Prerequisites
- Docker installed with the ability to run linux containers (I develop on Ubuntu)
- Docker-compose installed (if it didn't come with your docker installation)

#### Get it Running
- Clone my telepath-api project from `https://github.com/redemptive/telepath-api`
- Build my telepath-api container, tagged as telepath-api: `docker build ./telepath-api -t telepath-api`
- Run the containers: `docker-compose up ./telepath`
- Go to `http://localhost`

### Run it Local (The hard way)

#### Prerequisites
- MongoDB installed
- NodeJS 10 installed
- Npm installed

#### Get it Running
- Follow instructions in my telepath-api project
- You should now have a running mongodb instance and api instance
- Create a TELEPATH_API_LOCATION environment variable with your API location and port
- Run the dev server `npm start`