const getSingleUser = document.querySelector(".get-single-user");
const getMultipleUsers = document.querySelector(".get-multiple-users");
const singelUser = document.querySelector(".content-area__user");

getSingleUser.addEventListener("click", function () {
  // xhr
  var xhr = new XMLHttpRequest();

  // open - type, file, asynch
  xhr.open("GET", "user.json", true);

  // onload
  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      console.log(user);
      singelUser.innerHTML = `<ul class="checking-style">
        <li>Name: ${user.name}</li>
        <li><img src="${user.picture}" alt="user picture" width=50 height=50 /></li>
        <li>Age: ${user.age}</li>
        <li>Gender: ${user.gender}</li>
      </ul>`;
    }
  };

  // send
  xhr.send();
});

// multiple users
getMultipleUsers.addEventListener("click", function () {
  // xhr
  var xhr = new XMLHttpRequest();

  // open - type, file, asynch
  xhr.open("GET", "users.json", true);

  // onload
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      console.log(users);

      for (var i in users) {
        singelUser.innerHTML += `<ul class="checking-style">
        <li>Name: ${users[i].name}</li>
        <li><img src="${users[i].picture}" alt="user picture" width=50 height=50 /></li>
        <li>Age: ${users[i].age}</li>
        <li>Gender: ${users[i].gender}</li>
      </ul>`;
      }
    }
  };

  // send
  xhr.send();
});
