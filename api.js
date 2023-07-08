const express = require("express");
const { connection } = require("./connector");

const movieRouter = express.Router();

movieRouter.get("/api/booking", async (req, res) => {
    const lastRecord = await connection.findOne().sort({ _id: -1 }).limit(1).select("-_id -__v");
   
    res.send(lastRecord ? lastRecord : { message: "no previous booking found" });
});

movieRouter.post("/api/booking", async (req, res) => {
    await connection(req.body).save();
    res.send(req.body);
});

module.exports = movieRouter;