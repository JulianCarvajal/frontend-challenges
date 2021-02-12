const burgerMenu = document.getElementById('menu_button');
const headerContainer = document.getElementById('all-header');
const header = document.getElementById('header');
const nav = document.getElementById('nav');


burgerMenu.addEventListener('click', setStatus);

function setStatus() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        headerContainer.style.background = '';
        headerContainer.style.position = 'initial';
        headerContainer.style.zIndex = '0';
        burgerMenu.style.backgroundImage = `url('../images/icon-hamburger.svg')`;
    } else {
        nav.classList.add('active');
        nav.style.backgroundColor = 'black';
        headerContainer.style.background = 'black';
        headerContainer.style.position = 'fixed';
        headerContainer.style.zIndex = '1';
        burgerMenu.style.backgroundImage = `url('../images/icon-close.svg')`;
    }
}

