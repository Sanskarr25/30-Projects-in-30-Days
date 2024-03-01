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
