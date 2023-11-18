const express = require("express");
const mealCon = require("../controllers/mealController");
//Routes
const router = express.Router();

// Test
router.get("/meal-route-test", (req, res) => {
  res.send("Server Test Successful");
});

// CRUD routing
router.route("/").get(mealCon.getMeal).post(mealCon.createMeal);

////// router.route("/my-route").get(mealCon.getMeat);
router.route("/:id").get(mealCon.getMeal).patch(mealCon.updateMeal).delete(mealCon.deleteMeal);

module.exports = router;
  