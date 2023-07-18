# Book a movie ticket Backend

## About this server

The purpose of this server is:
1. Handle http requests received from frontend: [Book a movie ticket App](https://github.com/rameshgchavan/book-a-movie-ticket-frontend/tree/main) and 
2. Store data to or retrive data from database.

### `Project files structure`
![image](https://github.com/rameshgchavan/book-a-movie-ticket-backend/assets/109573381/eab76fad-8a95-410d-9720-c639fdc8bbef)

This project contains four js files 
1. index.js
2. connector.js
3. schema.js and
4. api.js

## index.js
Its a main file of project in which express js has used to use body-parser, cors, api (route) and listening a port 8080.

 ### `express js`
  express js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  
 Read more [express js](https://expressjs.com/)

 ### `body-parser`
Its a middleware that is used for parse incoming request bodies in a middleware before handlers, available under the req.body property.

Read more [body-parser](https://www.npmjs.com/package/body-parser)

 ### `cors`
cors (cross origin resource sharing) is a node.js package for providing a express middleware that can be used to enable CORS with various options.\
cors is a system, consisting of transmitting http headers, that determines whether browsers block frontend JavaScript code from accessing responses 
for cross-origin requests.

 Read more [cors](https://www.npmjs.com/package/cors)

## connector.js
This file contains code of connect to mongodb database using mongoose.\
It uses bookMovie schema and export the connection using model which will be used inside api.js.

### `mongoDB`
mongoDB is a source-available cross-platform document-oriented database program.\
Classified as a NoSQL database program, mongoDB uses JSON-like documents with optional schemas.

Read more [mongoDB](https://www.mongodb.com/)

### `mongoose`
mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

Read more [mongoose](https://www.npmjs.com/package/mongoose)

## schema.js
This file contains schema of bookMovie collection and exports it as bookMovieSchema which will be used inside connector.js.\
It uses mongoose's schema component.

## api.js
In this file I have imported connection (connector.js).\
Using express router I have created two api (routes) get and post and exported router as module which will be used inside index.js
### `get api`
This api finds the user (frontend) requested data into mongoDB database and send back response to user.
### `post api`
This api store the user (frontend) requested data into mongoDB database and send back response to user.

## Prerequisites
Need to install 
1. [mongoDB](https://www.mongodb.com/try/download/shell)
2. [nodemon](https://www.npmjs.com/package/nodemon)

## Script to run app
### `npm start`
Runs the app in the development mode.\
Using uri http://localhost:8080/api/booking you can test above given API in [Postman](https://www.postman.com/downloads/) 

## About me
- Ramesh Chavan, AlmaBetter Full Stack Web Development enthusiast.
    - Email: ramesh7452@gmail.com.

### Thanks! AlmaBetter and team.
