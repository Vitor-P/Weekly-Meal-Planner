// Default Meal Schema
const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "A meal must have a name"],
    unique: true,
  },
  description: String,
  ingredients: [
    {
      name: String,
      quantity: String,
      characteristics: {
        Main: Boolean,
        Seasoning: Boolean,
        Side: Boolean,
        Condiment: Boolean,
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
