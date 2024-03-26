const resnav = document.querySelector(".resnav");
const lista1 = document.querySelector(".lista1");

resnav.addEventListener("click", () => {
    lista1.classList.toggle("menu_visible");
});