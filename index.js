const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
// const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors())


const movieAPI = require("./api");

app.use(movieAPI);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   