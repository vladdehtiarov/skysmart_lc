const burgerImg = document.querySelector('.burger');
const menuMob = document.querySelector('.header__menu-mob');

burgerImg.addEventListener('click', () => {
    menuMob.classList.toggle('hide');
});