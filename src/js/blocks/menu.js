// const mediaQueryXL = window.matchMedia(`screen and (max-width: ${SCREEN_XL}px)`);
// if (mediaQueryXL.matches) {
// menu open
const menuNode = document.querySelector(".header__burger");
menuNode.addEventListener("click", function (evt) {
  if (evt.type === "click" || evt.keyCode === 13) {
    document.body.style.overflowY = "hidden";
    document.body.parentElement.style.overflowY = "hidden";
    document.querySelector(".general__menu").classList.add("general__menu--active");
    document.querySelector(".general__overlay").classList.add("general__overlay--active");
  }
});
// menu close
const closeMunu = function (evt) {
  if (evt.type === "click" || evt.keyCode === 13) {
    document.body.style.overflowY = "auto";
    document.body.parentElement.style.overflowY = "auto";
    document.querySelector(".general__menu").classList.remove("general__menu--active");
    document.querySelector(".general__overlay").classList.remove("general__overlay--active");
  }
};
document.querySelector(".interaction--close-menu").addEventListener("click", closeMunu);
document.querySelector(".general__overlay").addEventListener("click", closeMunu);


const arrLink = document.querySelectorAll(".main-nav__item");

arrLink.forEach(link => {
  link.addEventListener("click", navActive);
  link.addEventListener("keyup", navActive);
});

function navActive(evt) {
  if (evt.type === "click" || evt.keyCode === 13) { //evt.keyCode === 32 ||
    if (this.classList.contains("main-nav__item--active")) return;
    document.querySelector(".main-nav__item--active").classList.remove("main-nav__item--active");
    this.classList.add("main-nav__item--active");
  }
}
// }
