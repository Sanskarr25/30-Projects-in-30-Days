function changeColor(color) {
  document.body.style.backgroundColor = color;
}

var buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var color = e.target.id;
    changeColor(color);
  });
});

var customColor = document.getElementById("myText").value;
const submit = document.getElementById("submitButton");

function myFunction() {
  var colorName = document.getElementById("myText").value;
  changeColor(colorName);
  console.log(colorName);
}

submit.addEventListener("click", function (e) {
  myFunction();
});
