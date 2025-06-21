document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();
  const city = document.getElementById("city").value.trim();
  const address = document.getElementById("address").value.trim();
  const termsCheck = document.getElementById("termsCheck").checked;

  if (!termsCheck) {
    alert("Please accept the terms.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(user => user.userName === userName);
  if (userExists) {
    alert("This username is already registered!");
    return;
  }

  const newUser = {
    firstName,
    lastName,
    userName,
    password,
    city,
    address,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! You are being directed to the login page....");
  window.location.href = "../LoginModel/login.html";
});





