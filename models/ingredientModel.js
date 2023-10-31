// Default Ingredient Schema
const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A meal must have a name"],
    unique: true,
  },
  type: {
    type: String,
    enum: ["main", "side", "seasoning", "condiment"],
    required: [true, "An ingredient must have a type"],
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
