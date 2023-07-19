const { connection } = require("./src/connector");
const dotEnv = require("dotenv");
// Imported express
const express = require("express");
// Created express object
const app = express();
// Imported body parser
const bodyParser = require("body-parser");
// used body parser into express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Imported cors
const cors = require('cors')
// Used cors into express
app.use(cors())

// Created express router
let movieRouter = express.Router();
// get api to send last movie booking details
movieRouter.get("/api/booking", async (req, res) => {
    const lastRecord = await connection.findOne().sort({ _id: -1 }).limit(1).select("-_id -__v");

    res.send(lastRecord ? lastRecord : { message: "no previous booking found" });
});
// post api to save movie booking
movieRouter.post("/api/booking", async (req, res) => {
    await connection(req.body).save();
    res.send(req.body);
});

app.use(movieRouter);

dotEnv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    try {
        console.log(`App listening on port ${PORT}!`);
    }
    catch (err) {
        console.log("Connection failed for reason: " + err);
    }

});