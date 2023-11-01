const express = require("express");
const mealRouter = require("./routes/mealRouter");
const ingredientRouter = require("./routes/ingredientRouter");

const app = express();

//1- MIDDLEWARE
app.use(express.json());

//Routing
app.use("/api/v1/meals", mealRouter);
app.use("/api/v1/ingredients", ingredientRouter);

module.exports = app;
