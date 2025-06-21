document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const foundUser = users.find(user => user.userName === username && user.password === password);
  
    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      alert(`Welcome, ${foundUser.firstName}! 
You are being redirected to the home page...`);
  
      
      setTimeout(() => {
        window.location.href = "../Home-Page/index.html";  
      }, 500); 
    } else {
      alert("Kullanıcı adı veya şifre hatalı!");
    }
  });