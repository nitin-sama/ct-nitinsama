const getText = document.querySelector(".get-text");
const text = document.querySelector(".content-area__text");

getText.addEventListener("click", function () {
  // create xhr object
  const xhr = new XMLHttpRequest();

  // open - type, url, async
  xhr.open("GET", "sample.txt", true);

  // load
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
  };

  xhr.onload = function () {
    if (this.status == 200) {
      text.innerHTML = this.responseText;
      console.log(this.responseText);
    } else if ((this.status = 400)) {
      text.innerHTML = "File not found!";
      text.style.color = "red";
    } else {
      text.innerHTML = "Some error!";
      text.style.color = "red";
      console.log("Error!");
    }
  };

  xhr.onerror = function () {
    console.log("Request error....");
  };
  //   Will not run unless ready state is 4
  //   xhr.onreadystatechange = function () {
  //     console.log(this.readyState);
  //   };
  // send
  xhr.send();
});
