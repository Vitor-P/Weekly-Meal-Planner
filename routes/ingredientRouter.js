const express = require("express");
const ingredientCon = require("../controllers/ingredientController");

const router = express.Router();

// Test
router.get("/ingredient-route-test", (req, res) => {
  res.send("Server Test Successful");
});

// CRUD routing
router.route("/").get(ingredientCon.getIngredient).post(ingredientCon.createIngredient);

router
  .route("/:id")
  .get(ingredientCon.getIngredient)
  .patch(ingredientCon.updateIngredient)
  .delete(ingredientCon.deleteIngredient);

module.exports = router;
