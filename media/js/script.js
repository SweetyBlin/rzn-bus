const btn = document.querySelector(".burger");
const btnLine = document.querySelector(".burger__line");
const menu = document.querySelector(".header__menu");

btn.addEventListener("click", () => {
    btnLine.classList.toggle("animate");
    menu.classList.toggle("animate");
});