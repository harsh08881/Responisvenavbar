const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navbar.classList.toggle("active");
});
