document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the button click
  function addButtonClick() {
    // Get the container for ingredient selection fields
    const ingredientContainer = document.querySelector(".meal-ingredients");
    const penultContainer = document.querySelector(".meal-ingredients:nth-last-of-type(2)");

    // Clone the ingredient selection fields
    const clonedIngredients = ingredientContainer.cloneNode(true);

    // Clear the selected values from the cloned fields
    const selects = clonedIngredients.querySelectorAll("select");
    selects.forEach((select) => {
      select.selectedIndex = 0;
    });

    // Insert the cloned fields after the original container
    penultContainer.insertAdjacentElement("afterend", clonedIngredients);
  }

  // Get the "Add New Ingredient" button
  const addButton = document.getElementById("addIngredient");

  // Add event listener to the button
  addButton.addEventListener("click", addButtonClick);
});
