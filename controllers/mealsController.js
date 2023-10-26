// Define CRUD operations here

//TEST

// app.get("/api/v1/meals/", (res, req) = {})

// Create a meal
exports.getMeal = (req, res) => {
  // Route handler for creating a new meal
  const mealModel = "Model01";
  res.json({
    status: "Success",
    mealModel: { mealModel },
  });
};