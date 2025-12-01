// HEADER RESPONSIVE CODE 
let menuBtn = document.getElementById("menu-btn");
let mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});




// FAQs SECTION CODE 
let faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");

    answer.classList.toggle("hidden");
    icon.textContent = icon.textContent === "+" ? "-" : "+";
  });
});
