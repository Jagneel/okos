// Story scroll animation

const hiddenElement = document.querySelectorAll('.show')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if(scrolled < 133){
        hiddenElement.forEach(el => el.className = 'show')
    } else hiddenElement.forEach(el => el.className = 'hidden')
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}