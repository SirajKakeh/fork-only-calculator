var numbersList = document.querySelectorAll(".number-button");
var screen = document.querySelector(".screen");
var resetButton = document.querySelector("#reset-button");
var sumButton = document.querySelector("#sum-button");
var equalButton = document.querySelector("#equal-button");

var currentOperation = null;
var inOperation = false;
var previousNumber;

sumButton.addEventListener("click", function (event) {
  currentOperation = "sum";
  inOperation = true;
  previousNumber = screen.textContent;
});

resetButton.addEventListener("click", function (event) {
  screen.textContent = 0;
  currentOperation = null;
});

for (var i = 0; i < numbersList.length; i++) {
  var numberButton = numbersList[i];
  numberButton.addEventListener("click", function (event) {
    var number = event.target.textContent;

    // store saved screen value in a variable
    var screenValue = screen.textContent;

    if (inOperation === true) {
      screenValue = "0";
      inOperation = false;
    }

    // add the new value to the stored screenValue
    if (screenValue === "0") {
      screenValue = number;
    } else {
      screenValue = screenValue + number;
    }

    // display the new value to the screen
    screen.textContent = screenValue;
  });
}

equalButton.addEventListener("click", function (event) {
  // TODO: check curent operation before applying it
  var newValue = Number(screen.textContent) + Number(previousNumber);
  screen.textContent = newValue;
});
