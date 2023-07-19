// Imported express
const express = require("express");
// Created express router
const movieRouter = express.Router();

// Imported model
const { bookMovieModel } = require("./model");

// get api to send last movie booking details
movieRouter.get("/api/booking", async (req, res) => {
    const lastRecord = await bookMovieModel.findOne().sort({ _id: -1 }).limit(1).select("-_id -__v");

    res.send(lastRecord ? lastRecord : { message: "no previous booking found" });
});
// post api to save movie booking
movieRouter.post("/api/booking", async (req, res) => {
    await bookMovieModel(req.body).save();
    res.send(req.body);
});
// Exported router
module.exports = movieRouter;