const Ingredient = require("../models/ingredientModel");

// CRUD operations

exports.getIngredient = async (req, res) => {
  try {
    const newIngredient = await Ingredient.findById(req.params.id);
    console.log(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        ingredient: newIngredient,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createIngredient = async (req, res) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        ingredient: newIngredient,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateIngredient = async (req, res) => {
  try {
    const newIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Success",
      data: {
        ingredient: newIngredient,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteIngredient = async (req, res) => {
  try {
    const deleteIngredient = await Ingredient.findByIdAndDelete(req.params.id);
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
