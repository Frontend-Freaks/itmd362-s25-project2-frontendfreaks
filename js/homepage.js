const navlinksMobileMenu = document.querySelector(
  ".nav-links-mobile__homepage"
);
const hamburgerMenu = document.querySelector(".hamburger-menu__homepage");

hamburgerMenu.addEventListener("click", () => {
  navlinksMobileMenu.classList.toggle("show");
});
