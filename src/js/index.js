import '../scss/style.scss';
import './story_picture/show_more';
import './nav-page/nav-page';

const SCREEN_SM = 640,
  SCREEN_LG = 960,
  SCREEN_XL = 1440;

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
  const swiperContainer = [...document.querySelectorAll('.block__container')].concat([...document.querySelectorAll('.block-prices__container')]);
  const swiperWrapper = [...document.querySelectorAll('.block__wrapper')].concat([...document.querySelectorAll('.block-prices__wrapper')]);
  const swiperSlide = [...document.querySelectorAll('.block__slide')].concat([...document.querySelectorAll('.block-prices__slide')]);
  const swiperPagination = [...document.querySelectorAll('.block__pagination')].concat([...document.querySelectorAll('.block-prices__pagination')]);
  addClass(swiperContainer, 'swiper-container');
  addClass(swiperWrapper, 'swiper-wrapper');
  addClass(swiperSlide, 'swiper-slide');
  addClass(swiperPagination, 'swiper-pagination');
  const blockSwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
};

const addClass = function (arrNode, newClass) {
  arrNode.forEach(node => {
    node.classList.add(newClass);
  });
};

const mediaQuery = window.matchMedia(`screen and (max-width: ${SCREEN_SM}px)`);
if (mediaQuery.matches) {
  addScript("./lib/swiper.min.js", initSwiper);
} else {
  const arrShowMoreInput = document.querySelectorAll(".block__show-more .show-more__input");
  arrShowMoreInput.forEach(showMoreInput => {
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
  });
}
