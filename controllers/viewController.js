const Ingredient = require("../models/ingredientModel");
const Meal = require("../models/mealModel");
const catchAsync = require("../utils/catchAsync");
const {
  formatDate,
  getYesterday,
  getTwoDaysAgo,
  getThreeDaysAgo,
  getTomorrow,
  getTwoDaysToday,
  getThreeDaysToday,
} = require("../utils/date");

exports.getOverview = catchAsync(async (req, res) => {
  const ingredients = await Ingredient.find({}, "name -_id");
  const mealType = await Meal.getMealTypes();

  const today = formatDate(new Date());
  const yesterday = getYesterday();
  const twoDaysAgo = getTwoDaysAgo();
  const threeDaysAgo = getThreeDaysAgo();
  const tomorrow = getTomorrow();
  const twoDaysToday = getTwoDaysToday();
  const threeDaysToday = getThreeDaysToday();

  res.status(200).render("base", {
    title: "My Meal",
    ingredients,
    mealType,
    today,
    yesterday,
    twoDaysAgo,
    threeDaysAgo,
    tomorrow,
    twoDaysToday,
    threeDaysToday,
  });
  // res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

// exports.getOverview = catchAsync(async (req, res) => {
//   const ingredients = await Ingredient.find({}, "name -_id");

//   res.status(200).render("base", {
//     title: "My Meal",
//     ingredients,
//     date: "Today",
//   });
// });
