var backToTop = document.getElementById("back-to-top");

var offset = 100;
var scrollPosition, documentHeight;

// Calculate documents height
documentHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.offsetHeight,
  document.documentElement.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight
);

if (documentHeight != "undefined") {
  offset = documentHeight / 3;
}

// Scroll event listener
window.addEventListener("scroll", function (event) {
  scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;
  backToTop.className = scrollPosition > offset ? "visible" : "";
});

// Click event listener

backToTop.addEventListener("click", function (event) {
  document.documentElement.scrollTop = 0;
});
