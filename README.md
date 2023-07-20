# Book a movie ticket Backend

## About this server

The purpose of this server is:
1. Handle http requests received from frontend: [Book a movie ticket App](https://github.com/rameshgchavan/book-a-movie-ticket-frontend) and 
2. Store data to or retrive data from database.

### `Project files structure`
![image](https://github.com/rameshgchavan/book-a-movie-ticket-backend/assets/109573381/d92f4e1a-bda0-4c06-b48b-cc2e004de9ba)

This project contains five js files 
1. index.js
2. connector.js
3. schema.js
4. model.js and 
5. api.js

## index.js
Its a main file of project in which express js has used to use body-parser, cors, api (route) and listening a port 8080.\
and imported mongodb connection (src/connector.js)

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
This file contains code of connect to mongodb database using mongoose and exported connection which will be used inside index.js.

### `mongoDB`
mongoDB is a source-available cross-platform document-oriented database program.\
Classified as a NoSQL database program, mongoDB uses JSON-like documents with optional schemas.

Read more [mongoDB](https://www.mongodb.com/)

### `mongoose`
mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

Read more [mongoose](https://www.npmjs.com/package/mongoose)

 ## schema.js
This file contains schema documentation of bookMovie collection and exports it as bookMovieSchema which will be imported inside model.js.\
It uses mongoose's schema component.

 ## model.js
 In this file bookMovieSchema schema imported and exported as model bookMovieModel with collection name which will be used inside api.js

## api.js
In this file I have imported model bookMovieModel (model.js).\
Using express router I have created two api (routes) get and post and exported router as module which will be used inside index.js
### `get api`
This api finds the user (frontend) requested data into mongoDB database and send back response to user.
### `post api`
This api store the user (frontend) requested data into mongoDB database and send back response to user.

## Prerequisites
Need to install 
1. mongoDB [Download](https://www.mongodb.com/try/download/community)
2. Install nodemon globally: `npm install -g nodemon` [Read more](https://www.npmjs.com/package/nodemon)

## Step to get this repo on local machine and execution
1. Go to Code button and download zip file.\
![image](https://github.com/rameshgchavan/book-a-movie-ticket-frontend/assets/109573381/351ccc07-7a8b-4067-a98b-f1a4cd4f2112)
2. Unzip file and type `cmd` inside address bar of file explorer and hit Enter, command prompt will open.\
![image](https://github.com/rameshgchavan/book-a-movie-ticket-backend/assets/109573381/20ea484f-e5a4-4c41-b196-ee55a3696ae4)
3. In command prompt type `npm install`. It will downloads and installs all required packages.\
   Have patience that will take some time.
4. After installations of packages you can type `code .` and hit Enter, the project will open in [VS Code](https://code.visualstudio.com/download)\
   or type following scrips in command prompt.

## Script to run server
### `npm start`
### `npm run dev`
`npm run dev` recommended if nodemon installed.

Runs the app in the development mode.\
Using uri http://localhost:8080/api/booking you can test above given API in [Postman](https://www.postman.com/downloads/) 

## About me
- Ramesh Chavan, AlmaBetter Full Stack Web Development enthusiast.
    - Email: ramesh7452@gmail.com.

### Thanks! AlmaBetter and team.
