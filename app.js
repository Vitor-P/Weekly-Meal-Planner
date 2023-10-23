const express = require("express");

const meals = require("./routes/meals");

const app = express();

//1- MIDDLEWARE
app.use(express.json());

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
