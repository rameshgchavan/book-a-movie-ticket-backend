// Imported express
const express = require("express");
// Imported connection model
const { connection } = require("./connector");
// Created express router
const movieRouter = express.Router();
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
// Exported express router
module.exports = movieRouter;