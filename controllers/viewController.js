const Ingredient = require("../models/ingredientModel");
const Meal = require("../models/mealModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res) => {
  const ingredients = await Ingredient.find({}, "name -_id");
  res.status(200).render("base", {
    title: "My Meal",
    ingredients,
    date: "Today",
  });
  // res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});
