let currentDisplay = 0;

// Flag to track whether the result is displayed
let resultDisplay = false;

function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  resultDisplay = false;

  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = currentDisplay;
}

function calculateResult() {
  try {
    const result = eval(currentDisplay);

    // Append the result to the current display, preceded by an equal sign (=)
    currentDisplay += "\n=" + result.toString();
    updateDisplay();
  } catch (error) {
    currentDisplay += "\nError";

    updateDisplay();
  }
  resultDisplay = true;
}

function clearLastElement() {
  // Remove the last character from the current display using the slice() method
  currentDisplay = currentDisplay.slice(0, -1);

  // If the current display becomes empty, set it back to "0"
  if (currentDisplay === "") {
    currentDisplay = "0";
  }

  // Update the calculator display to reflect the changes
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0"; // Reset the current display to "0"
  resultDisplay = false; // Reset the result display flag to false

  // Update the calculator display to show the cleared content
  updateDisplay();
}
