const express = require("express");
const mC = require("../controllers/mealController");
//Routes
const router = express.Router();

// Test
router.get("/route-test", (req, res) => {
  res.send("Server Test Successful");
});

// CRUD routing
router.route("/").get(mC.getMeal).post(mC.createMeal);

// router.route("/my-route").get(mC.getMeat);
router.route("/:id").get(mC.getMeal).patch(mC.updateMeal).delete(mC.deleteMeal);

module.exports = router;
