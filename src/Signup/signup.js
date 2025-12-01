document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let error = document.getElementById("error");

  if (!name || !email || !password) {
    error.textContent = "All fields are required!";
    error.classList.remove("hidden");
    return;
  }

  // Save user in LocalStorage
  let user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("loggedIn", "true");

  alert("Signup successful");
  
  // Redirect to home page
  window.location.href = "../index.html";
});
