const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopEmail);
burgerMenu.addEventListener('click', toggleBurgerMenu);

function toggleDesktopEmail(){
    desktopMenu.classList.toggle('inactive')
}

function toggleBurgerMenu(){
    mobileMenu.classList.toggle('inactive')
}