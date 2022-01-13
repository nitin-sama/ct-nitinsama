const getApi = document.querySelector(".get-api");
const text = document.querySelector(".content-area__text");

getApi.addEventListener("click", function () {
  // xhr
  var xhr = new XMLHttpRequest();

  // open
  xhr.open("GET", "https://api.github.com/users", true);

  // onload
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      console.log(users);

      for (let i in users) {
        text.innerHTML += `
        <ul class="checking-style">
          <li>Id: ${users[i].id}</li>
          <li>Name: ${users[i].login}</li>
          <li><img src="${users[i].avatar_url}" alt="user picture" width=50 height=50 /></li>
        </ul>
      `;
      }
    }
  };

  // send
  xhr.send();
});
