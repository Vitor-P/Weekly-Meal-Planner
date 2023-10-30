const Meal = require("../models/mealModel");
const Ingredient = require("../models/ingredientModel");
const { mealSample } = require("../dev-data/data/ingredientSample");

// CRUD operations

exports.getMeal = (req, res) => {
  const meal = Meal.findById(req.params.id);
  console.log(req.params.id);
  const mealModel = mealSample;
  console.log(mealSample);
  res.status(200).json({
    status: "Meal",
    data: {
      meal: mealModel,
    },
  });
};

exports.createMeal = async (req, res) => {
  try {
    const newMeal = await Meal.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        meal: newMeal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Success",
      data: {
        meal: meal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
