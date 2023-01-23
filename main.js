const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carAside = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopEmail);
burgerMenu.addEventListener('click', toggleBurgerMenu);
carAside.addEventListener('click', toggleCarAside);

function toggleDesktopEmail(){
    desktopMenu.classList.toggle('inactive')
}

function toggleBurgerMenu(){
    mobileMenu.classList.toggle('inactive')
}

function toggleCarAside(){
    const mobileMenuOpened = !mobileMenu.classList.contains('inactive');

    if(mobileMenuOpened){
        mobileMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}