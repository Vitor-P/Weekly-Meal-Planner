document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the button click to add more ingredient selection fields
  function addButtonClick() {
    const ingredientContainer = document.querySelector(".meal-ingredients");
    const penultContainer = document.querySelector(".meal-ingredients:nth-last-of-type(2)");
    const clonedIngredients = ingredientContainer.cloneNode(true);

    const selects = clonedIngredients.querySelectorAll("select");
    selects.forEach((select) => {
      select.selectedIndex = 0;
    });

    penultContainer.insertAdjacentElement("afterend", clonedIngredients);
    //test
    // const mealDate = document.querySelector("#mealDate");
    // console.log(mealDate.value);
  }

  const addButton = document.getElementById("addIngredient");
  addButton.addEventListener("click", addButtonClick);

  // Function to handle the button click to clear additional ingredient selection fields
  function clearButtonClick() {
    var removeElements = document.querySelectorAll(".meal-ingredients");
    // Start the loop from the second element and remove subsequent elements
    for (var i = 1; i < removeElements.length; i++) {
      removeElements[i].parentNode.removeChild(removeElements[i]);
    }

    const formContainer = document.querySelector(".form-fields");
    const selects = formContainer.querySelectorAll("select");
    const mealName = document.querySelector("#mealName");
    const mealDate = document.querySelector("#mealDate");

    selects.forEach((select) => {
      select.selectedIndex = 0;
    });

    // console.log(forms);
    if (mealName) {
      mealName.value = "";
    }

    if (mealDate) {
      mealDate.value = "";
    }
  }

  function clearFields() {}

  const clearButton = document.getElementById("clearMeal");
  clearButton.addEventListener("click", clearButtonClick);
});
