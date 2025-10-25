const navList = document.querySelector('.nav-list');
const navBar = document.querySelector('.navbar');
const menuHamburguer = document.createElement('button');

menuHamburguer.classList.add('menu-hamburger');
menuHamburguer.innerHTML = '&#9776;';
menuHamburguer.setAttribute('aria-label', 'Abrir menu de navegação');
navBar.appendChild(menuHamburguer);

export function mostraMenu() {
    menuHamburguer.addEventListener('click', e => {
        navList.classList.toggle('active');
    })
}
