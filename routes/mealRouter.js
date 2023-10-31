const express = require("express");
const mealController = require("../controllers/mealController");
//Routes
const router = express.Router();

// Test
router.get("/route-test", (req, res) => {
  res.send("Server Test Successful");
});

// express.Router().route("/").get(tourController.getAllTours).post(tourController.createTour);
router.route("/").get(mealController.getMeal).post(mealController.createMeal);

// router.route("/my-route").get(mealController.getMeat);
router.route("/:id").get(mealController.getMeal).patch(mealController.updateMeal).delete(mealController.deleteMeal);

module.exports = router;
