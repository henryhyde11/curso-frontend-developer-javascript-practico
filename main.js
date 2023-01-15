const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopEmail);

function toggleDesktopEmail(){
    desktopMenu.classList.toggle('inactive');
}