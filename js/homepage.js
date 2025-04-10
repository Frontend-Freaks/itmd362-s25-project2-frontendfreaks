const navlinksMobileMenu = document.querySelector(".nav-links-mobile");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  navlinksMobileMenu.classList.toggle("show");
});
