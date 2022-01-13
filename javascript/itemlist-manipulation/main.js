var form = document.querySelector("form");
var ul = document.querySelector(".items-container__list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Adding new items to list

  var newItem = document.querySelector(".item").value;

  if (newItem == "" || !/\S/.test(newItem)) {
    alert("Please enter something!");
    return;
  }

  var newli = document.createElement("li");
  newli.className = "items-container__list__item";
  var newText = newItem;
  newli.append(newText);
  ul.appendChild(newli);

  // adding close button

  var close = document.createElement("button");
  close.className = "closeButton";

  newli.appendChild(close);

  document.querySelector(".form").reset();
});

ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("closeButton")) {
    console.log(e.target.parentElement.innerText);
    if (
      confirm(
        "Are you sure you want to delete '" +
          e.target.parentElement.innerText +
          "' ?"
      )
    ) {
      var li = e.target.parentElement;
      ul.removeChild(li);
    }
  }
});
