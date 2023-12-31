const Meal = require("../models/mealModel");

// CRUD operations

exports.getMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    console.log(req.params.id);
    console.log(meal);
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
    const deleteMeal = await Meal.findByIdAndDelete(req.params.id);
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
