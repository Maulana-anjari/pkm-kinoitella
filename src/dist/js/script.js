const hamberger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")
hamberger.addEventListener('click', () => {
    hamberger.classList.toggle('is-active');
    menu.classList.toggle("menu-active");
})