const arrLink = document.querySelectorAll(".nav-page__item");

arrLink.forEach(link=>{
    link.addEventListener("click", navActive);
    link.addEventListener("keyup", navActive);
});

function navActive(evt) {
    if (evt.type === "click" || evt.keyCode === 13) { //evt.keyCode === 32 ||
        if (this.parentNode.classList.contains("nav-page__li--active")) return;
        document.querySelector(".nav-page__li--active").classList.remove("nav-page__li--active");
        this.parentNode.classList.add("nav-page__li--active");        
    }
}