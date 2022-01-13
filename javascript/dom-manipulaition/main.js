console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);

var header = document.querySelector(".header");

header.style.backgroundColor = "yellow";

header.style.borderBottom = "2px solid black";

var listItems = document.querySelectorAll(".items-container__list__item");

// listItems[0].innerHTML = "Something else";

listItems[1].style.backgroundColor = "blue";

listItems[1].style.color = "white";

listItems[2].style.borderBottom = "2px solid red";

listItems[3].style.border = "1px solid green";

// listItems.style.backgroundColor = "red"; can't loop through so use for loop

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = "red";
// }

var input = document.querySelector("input[type = text]");
var inputButton = document.querySelector("input[type = button]");

// input.value = "Hello";

// inputButton.value = "SEND";

var listFirstItem = document.querySelector(
  ".items-container__list__item:first-child"
);

listFirstItem.style.color = "red";

var listLastItem = document.querySelector(
  ".items-container__list__item:last-child"
);

listLastItem.style.color = "purple";

var list2Item = document.querySelector(
  ".items-container__list__item:nth-child(2)"
);

list2Item.style.color = "pink";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
  odd[i].style.color = "#000";
  even[i].style.color = "#000";
}

var ul = document.querySelector(".items-container__list");

// console.log(ul.children[1]);

var newDiv = document.createElement("div");
newDiv.className = "new-div";

var newText = document.createTextNode("I am created in javascript!");

newDiv.append(newText);

// ul.insertBefore(newDiv, list2Item);

console.log(newDiv);

// events

var eventButton = document.querySelector(".event-checker");

eventButton.addEventListener("dblclick", function (e) {
  console.log(e.type);
});

// eventButton.addEventListener("mousedown", function (e) {
//   console.log(e.type);
// });

// eventButton.addEventListener("mouseup", function (e) {
//   console.log(e.type);
// });

eventButton.addEventListener("click", function (e) {
  console.log(e.type);
});

// Form
var output = document.querySelector(".output");
var itemInput = document.querySelector("input[type = text]");
var form = document.querySelector(".form");

itemInput.addEventListener("input", function (e) {
  console.log(e.target.value);
  output.innerHTML = e.target.value;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.type);
});
