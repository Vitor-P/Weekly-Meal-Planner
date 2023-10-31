const express = require("express");
const mealsRouter = require("./routes/mealRouter");

const app = express();

//1- MIDDLEWARE
// app.use(express.json());

//Routing
app.use("/api/v1/meals", mealsRouter);

module.exports = app;
