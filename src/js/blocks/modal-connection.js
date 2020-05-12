const OVERLAY_NODE = document.querySelector(".general__overlay");
// modal open
const constructorOpenModal = (classNode, addClass) => {
  return function (evt) {
    if (evt.type === "click" || evt.keyCode === 13) {
      document.body.style.overflowY = "hidden";
      document.body.parentElement.style.overflowY = "hidden";
      document.querySelector("." + classNode).classList.add(addClass);
      //   const overlay = document.querySelector(".general__overlay");
      OVERLAY_NODE.classList.add("general__overlay--active");
      OVERLAY_NODE.style.zIndex = 104;
    }
  };
};

// modal close
const constructorCloseMunu = (classNode, removeClass) => {
  return function (evt) {
    if (evt.type === "click" || evt.keyCode === 13) {
      document.body.style.overflowY = "auto";
      document.body.parentElement.style.overflowY = "auto";
      document.querySelector("." + classNode).classList.remove(removeClass);
      //   const overlay = document.querySelector(".general__overlay");
      OVERLAY_NODE.classList.remove("general__overlay--active");
      OVERLAY_NODE.style.zIndex = 99;
    }
  };
};

// feedback
document.querySelectorAll(".interaction--request").forEach(el => {
  el.addEventListener("click", constructorOpenModal("modal-connection--feedback", "modal-connection--feedback--open"));
});
const closeFeedback = constructorCloseMunu("modal-connection--feedback", "modal-connection--feedback--open");
document.querySelector(".modal-connection__close--feedback").addEventListener("click", closeFeedback);
OVERLAY_NODE.addEventListener("click", closeFeedback);
document.querySelectorAll(".interaction--request").forEach(el => {
  el.addEventListener("click", constructorOpenModal("modal-connection--feedback", "modal-connection--feedback--open"));
});

// request call
document.querySelectorAll(".interaction--call").forEach(el => {
  el.addEventListener("click", constructorOpenModal("modal-connection--request-call", "modal-connection--request-call--open"));
});
const closeRequestCall = constructorCloseMunu("modal-connection--request-call", "modal-connection--request-call--open");
document.querySelector(".modal-connection__close--request-call").addEventListener("click", closeRequestCall);
OVERLAY_NODE.addEventListener("click", closeRequestCall);
