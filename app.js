const express = require("express");
const mealsRouter = require("./routes/mealsRouter");

const app = express();

//1- MIDDLEWARE
// app.use(express.json());

app.use("/api/v1/meals", mealsRouter);

module.exports = app;
