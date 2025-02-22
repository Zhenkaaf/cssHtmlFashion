const iconMenu = document.querySelector(".menu__burger");
const menuBody = document.querySelector(".header__actions");
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}
