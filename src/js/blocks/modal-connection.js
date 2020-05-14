
// modal open
const constructorOpenModal = (classNode) => {
  const unique = classNode.split("--")[1];
  const modalNode = document.querySelector("." + classNode);
  const overlay = document.querySelector(".general__overlay--" + unique);
  return function (evt) {
    if (evt.type === "click" || evt.keyCode === 13) {
      document.body.style.overflowY = "hidden";
      document.body.parentElement.style.overflowY = "hidden";
      modalNode.classList.add(`${classNode}--open`);
      overlay.classList.add(`general__overlay--${unique}--open`);
    }
  };
};

// modal close
const constructorCloseMunu = (classNode) => {
  const unique = classNode.split("--")[1];
  const modalNode = document.querySelector("." + classNode);
  const overlay = document.querySelector(".general__overlay--" + unique);
  return function (evt) {
    if (evt.type === "click" || evt.keyCode === 13) {
      document.body.style.overflowY = "auto";
      document.body.parentElement.style.overflowY = "auto";
      modalNode.classList.remove(`${classNode}--open`);
      overlay.classList.remove(`general__overlay--${unique}--open`);
    }
  };
};


// feedback
document.querySelectorAll(".interaction--request").forEach(el => {
  el.addEventListener("click", constructorOpenModal("modal-connection--feedback"));
});
const closeFeedback = constructorCloseMunu("modal-connection--feedback");
document.querySelector(".modal-connection__close--feedback").addEventListener("click", closeFeedback);
document.querySelector(".general__overlay--feedback").addEventListener("click", closeFeedback);


// request call
document.querySelectorAll(".interaction--call").forEach(el => {
  el.addEventListener("click", constructorOpenModal("modal-connection--request-call"));
});
const closeRequestCall = constructorCloseMunu("modal-connection--request-call");
document.querySelector(".modal-connection__close--request-call").addEventListener("click", closeRequestCall);
document.querySelector(".general__overlay--request-call").addEventListener("click", closeRequestCall);
