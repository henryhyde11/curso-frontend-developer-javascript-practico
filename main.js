const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopEmail);
burgerMenu.addEventListener('click', toggleBurgerMenu);
carMenu.addEventListener('click', toggleCarMenu);

function toggleDesktopEmail(){
    desktopMenu.classList.toggle('inactive')
}

function toggleBurgerMenu(){
    mobileMenu.classList.toggle('inactive')
}

function toggleCarMenu(){
    aside.classList.toggle('inactive')
}