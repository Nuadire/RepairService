const showMoreInput = document.querySelector(".story-picture__input");
showMoreInput.addEventListener("change", function (evt) {
  const blockWrapper = this.parentNode.parentNode.parentNode.querySelector(".story-picture__text");
  if (this.checked) {
    this.parentNode.lastChild.textContent = "Скрыть";
    blockWrapper.classList.add("story-picture__text--all");
} else {
    this.parentNode.lastChild.textContent = "Читать далее";
    blockWrapper.classList.remove("story-picture__text--all");
  }
});