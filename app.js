const path = require("path");
const express = require("express");
const mealRouter = require("./routes/mealRouter");
const ingredientRouter = require("./routes/ingredientRouter");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Global Middleware
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

//Routing
app.get("/", (req, res) => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const formattedDate = today.toISOString().slice(0, 10);
  res.status(200).render("base", {
    meal: "My Meal",
    date: "Today",
    formattedDate,
  });
  // res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/api/v1/meals", mealRouter);
app.use("/api/v1/ingredients", ingredientRouter);

module.exports = app;
