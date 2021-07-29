// Burger menu
const burgerImg = document.querySelector('.burger');
const menuMob = document.querySelector('.header__menu-mob');

burgerImg.addEventListener('click', function() {
    menuMob.classList.toggle('hide');
    this.classList.toggle('close-burger');
});


// Filter for year on mobile
const anyYearsBtn = document.querySelector('.any-years-btn');
const cursesFiltersLeft = document.querySelector('.curses__filters-left');
const backAgeFilter = document.querySelector('.back-age-filter');
const showCourses = document.querySelector('.show-courses');


showElement(cursesFiltersLeft, anyYearsBtn, 'hide_m');

hideElement(cursesFiltersLeft, backAgeFilter, 'hide_m');
hideElement(cursesFiltersLeft, showCourses, 'hide_m');

function showElement(element, btn, selector) {
    btn.addEventListener('click', e => {
        e.preventDefault();
        element.classList.remove(selector);
    });
}

function hideElement(element, btn, selector) {
    btn.addEventListener('click', e => {
        e.preventDefault();
        element.classList.add(selector);
    });
}


