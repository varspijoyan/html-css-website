const menu_responsive_icon = document.querySelector(".icon-menu");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");

menu_responsive_icon.addEventListener("click", () => {
    nav.style.display = "block";
});

close.addEventListener("click", () => {
    nav.style.display = "none";
});