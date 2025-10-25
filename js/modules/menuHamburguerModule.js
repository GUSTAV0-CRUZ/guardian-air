const navList = document.querySelector('.nav-list');
const navBar = document.querySelector('.navbar');
const menuHamburguer = document.createElement('button');

menuHamburguer.classList.add('menu-hamburger');
menuHamburguer.innerHTML = '&#9776;';
menuHamburguer.setAttribute('aria-label', 'Abrir menu de navegação');
menuHamburguer.setAttribute('aria-expanded', 'false');
menuHamburguer.setAttribute('aria-controls', 'nav-menu');
navBar.appendChild(menuHamburguer);

export function mostraMenu() {
    menuHamburguer.addEventListener('click', e => {
        navList.classList.toggle('active');
        menuHamburguer.setAttribute('aria-expanded', navList.classList.contains('active')); 
        if(navList.classList.contains('active')) return menuHamburguer.setAttribute('aria-label', 'Fechar menu de navegação');
        menuHamburguer.setAttribute('aria-label', 'Abrir menu de navegação');
    })
}
