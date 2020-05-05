import {
  SCREEN_SM
} from "../const";
// import "../../../node_modules/swiper/css/swiper.min.css";

const addScript = function (url, func) {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = func;
  script.onreadystatechange = func;
  head.appendChild(script);
};

const initSwiper = function () {
  const mySwiper = new Swiper('.block__container', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.block__pagination',
      clickable: true
    },
  });
};

const mediaQuery = window.matchMedia(`screen and (max-width: ${SCREEN_SM}px)`);
if (mediaQuery.matches) {
  addScript("../node_modules/swiper/js/swiper.min.js", initSwiper);
} else {
  const showMoreInput = document.querySelector(".show-more__input--brand");
  showMoreInput.addEventListener("change", function (evt) {
    const blockWrapper = this.parentNode.parentNode.parentNode.querySelector(".block__wrapper");
    if (this.checked) {
      this.parentNode.lastChild.textContent = "Скрыть";
      blockWrapper.classList.add("block__wrapper--all");
    } else {
      this.parentNode.lastChild.textContent = "Читать далее";
      blockWrapper.classList.remove("block__wrapper--all");
    }
  });
}
