!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c,r,a,l,i=function(e,t){e.forEach((function(e){e.classList.add(t)}))};window.matchMedia("screen and (max-width: ".concat(640,"px)")).matches?(c="./lib/swiper.min.js",r=function(){var e=o(document.querySelectorAll(".block__container")).concat(o(document.querySelectorAll(".block-prices__container"))),t=o(document.querySelectorAll(".block__wrapper")).concat(o(document.querySelectorAll(".block-prices__wrapper"))),n=o(document.querySelectorAll(".block__slide")).concat(o(document.querySelectorAll(".block-prices__slide"))),c=o(document.querySelectorAll(".block__pagination")).concat(o(document.querySelectorAll(".block-prices__pagination")));i(e,"swiper-container"),i(t,"swiper-wrapper"),i(n,"swiper-slide"),i(c,"swiper-pagination"),new Swiper(".swiper-container",{slidesPerView:1.2,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}})},a=document.getElementsByTagName("head")[0],(l=document.createElement("script")).type="text/javascript",l.src=c,l.onload=r,l.onreadystatechange=r,a.appendChild(l)):document.querySelectorAll(".block__show-more .show-more__input").forEach((function(e){e.addEventListener("change",(function(e){var t=this.parentNode.parentNode.parentNode.querySelector(".block__wrapper");this.checked?(this.parentNode.lastChild.textContent="Скрыть",t.classList.add("block__wrapper--all")):(this.parentNode.lastChild.textContent="Читать далее",t.classList.remove("block__wrapper--all"))}))}))},function(e,t,n){},function(e,t){document.querySelector(".story-picture__input").addEventListener("change",(function(e){var t=this.parentNode.parentNode.parentNode.querySelector(".story-picture__text");this.checked?(this.parentNode.lastChild.textContent="Скрыть",t.classList.add("story-picture__text--all")):(this.parentNode.lastChild.textContent="Читать далее",t.classList.remove("story-picture__text--all"))}))},function(e,t){function n(e){if("click"===e.type||13===e.keyCode){if(this.parentNode.classList.contains("nav-page__li--active"))return;document.querySelector(".nav-page__li--active").classList.remove("nav-page__li--active"),this.parentNode.classList.add("nav-page__li--active")}}document.querySelectorAll(".nav-page__item").forEach((function(e){e.addEventListener("click",n),e.addEventListener("keyup",n)}))},function(e,t){document.querySelector(".header__burger").addEventListener("click",(function(e){"click"!==e.type&&13!==e.keyCode||(document.body.style.overflowY="hidden",document.body.parentElement.style.overflowY="hidden",document.querySelector(".general__menu").classList.add("general__menu--active"),document.querySelector(".general__overlay").classList.add("general__overlay--active"))}));var n=function(e){"click"!==e.type&&13!==e.keyCode||(document.body.style.overflowY="auto",document.body.parentElement.style.overflowY="auto",document.querySelector(".general__menu").classList.remove("general__menu--active"),document.querySelector(".general__overlay").classList.remove("general__overlay--active"))};function o(e){if("click"===e.type||13===e.keyCode){if(this.classList.contains("main-nav__item--active"))return;document.querySelector(".main-nav__item--active").classList.remove("main-nav__item--active"),this.classList.add("main-nav__item--active")}}document.querySelector(".interaction--close-menu").addEventListener("click",n),document.querySelector(".general__overlay").addEventListener("click",n),document.querySelectorAll(".main-nav__item").forEach((function(e){e.addEventListener("click",o),e.addEventListener("keyup",o)}))},function(e,t){var n=document.querySelector(".general__overlay"),o=function(e,t){return function(o){"click"!==o.type&&13!==o.keyCode||(document.body.style.overflowY="hidden",document.body.parentElement.style.overflowY="hidden",document.querySelector("."+e).classList.add(t),n.classList.add("general__overlay--active"),n.style.zIndex=104)}},c=function(e,t){return function(o){"click"!==o.type&&13!==o.keyCode||(document.body.style.overflowY="auto",document.body.parentElement.style.overflowY="auto",document.querySelector("."+e).classList.remove(t),n.classList.remove("general__overlay--active"),n.style.zIndex=99)}};document.querySelectorAll(".interaction--request").forEach((function(e){e.addEventListener("click",o("modal-connection--feedback","modal-connection--feedback--open"))}));var r=c("modal-connection--feedback","modal-connection--feedback--open");document.querySelector(".modal-connection__close--feedback").addEventListener("click",r),n.addEventListener("click",r),document.querySelectorAll(".interaction--request").forEach((function(e){e.addEventListener("click",o("modal-connection--feedback","modal-connection--feedback--open"))})),document.querySelectorAll(".interaction--call").forEach((function(e){e.addEventListener("click",o("modal-connection--request-call","modal-connection--request-call--open"))}));var a=c("modal-connection--request-call","modal-connection--request-call--open");document.querySelector(".modal-connection__close--request-call").addEventListener("click",a),n.addEventListener("click",a)}]);
//# sourceMappingURL=index.js.map