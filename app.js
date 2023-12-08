const path = require("path");
const express = require("express");
const mealRouter = require("./routes/mealRouter");
const ingredientRouter = require("./routes/ingredientRouter");
const viewRouter = require("./routes/viewRouter");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Global Middleware
app.use(express.static(path.join(__dirname, "/public")));


app.use(express.json());

//Routing

app.use("/", viewRouter);
app.use("/api/v1/meals", mealRouter);
app.use("/api/v1/ingredients", ingredientRouter);

module.exports = app;
