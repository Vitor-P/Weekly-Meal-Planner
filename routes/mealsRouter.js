const express = require("express");
const mealsController = require("../controllers/mealController");
//Routes
const router = express.Router();

// Test
router.get("/route-test", (req, res) => {
  res.send("Server Test Successful");
});

// express.Router().route('/').get(tourController.getAllTours).post(tourController.createTour);
router.route("/").get(mealsController.getMeal);

module.exports = router;
