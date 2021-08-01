// Burger menu
const burgerImg = document.querySelector('.burger');
const menuMob = document.querySelector('.header__menu-mob');

burgerImg.addEventListener('click', function() {
    menuMob.classList.toggle('show');
    this.classList.toggle('close-burger');
});


// Filter for year on mobile
const anyYearsBtn = document.querySelector('.any-years-btn');
const cursesFiltersLeft = document.querySelector('.curses__filters-left');
const backAgeFilter = document.querySelector('.back-age-filter');
const showCourses = document.querySelector('.show-courses');


showElement(cursesFiltersLeft, anyYearsBtn, 'show');

hideElement(cursesFiltersLeft, backAgeFilter, 'show');
hideElement(cursesFiltersLeft, showCourses, 'show');

function showElement(element, btn, selector) {
    btn.addEventListener('click', e => {
        e.preventDefault();
        element.classList.add(selector);
    });
}

function hideElement(element, btn, selector) {
    btn.addEventListener('click', e => {
        e.preventDefault();
        element.classList.remove(selector);
    });
}


