const menuItems = document.querySelectorAll(
  '.menu__item--submenu .menu__link',
);

const openMenuBtn = document.querySelector('.header__btn-menu-open')
const closeMenuBtn = document.querySelector('.header__btn-menu-close')
const menu = document.querySelector('.header--mobile');
const overlay = document.querySelector('.overlay');


menuItems.forEach(menuItem => {
    menuItem.addEventListener('click',() => {
        menuItem.nextElementSibling.classList.toggle('menu__submenu--active');
        menuItem.classList.toggle('menu__link--active');
    } )
})
console.log(menuItems);

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

function toggleMenu () { 
menu.classList.toggle('header--mobile-active');
overlay.classList.toggle('overlay--active');
}