document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();
  let error = document.getElementById("error");

  if (!email || !password) {
    error.textContent = "All fields are required!";
    error.classList.remove("hidden");
    return;
  }

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful");

    window.location.href = "../index.html";
  } else {
    error.textContent = "Incorrect email or password!";
    error.classList.remove("hidden");
  }
});
