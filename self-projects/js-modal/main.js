var openButton = document.querySelector(".btn-open");
var openClose = document.querySelector(".btn-close");
var modalClass = document.getElementById("modal");

openButton.addEventListener("click", function () {
  modalClass.classList.remove("hide");
});

openClose.addEventListener("click", function () {
  modalClass.classList.add("hide");
});
