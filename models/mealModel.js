// Default Meal Schema
const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["breakfast", "lunch", "snack", "dinner"],
    required: [true, "An meal must have a type"],
  },
  name: {
    type: String,
    // required: [true, "A meal must have a name"],
    unique: true,
  },
  description: String,
  ingredients: [
    {
      ingredients: {
        type: String, // Reference to the 'name' field in the Ingredients collection
        ref: "ingredient",
      },
      quantity: {
        type: String,
        default: 1,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
