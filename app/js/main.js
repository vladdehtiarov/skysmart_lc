// Burger menu
const burgerImg = document.querySelector('.burger');
const menuMob = document.querySelector('.header__menu-mob');

if (burgerImg) {
    burgerImg.addEventListener('click', function() {
        menuMob.classList.toggle('show');
        this.classList.toggle('close-burger');
    });
}



// Filter for year on mobile
const anyYearsBtn = document.querySelector('.any-years-btn');
const cursesFiltersLeft = document.querySelector('.curses__filters-left');
const backAgeFilter = document.querySelector('.back-age-filter');
const showCourses = document.querySelector('.show-courses');

if (anyYearsBtn) {
    showElement(cursesFiltersLeft, anyYearsBtn, 'show');

    hideElement(cursesFiltersLeft, backAgeFilter, 'show');
    hideElement(cursesFiltersLeft, showCourses, 'show');
}


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

//All age filters
const allAgeBtn = document.querySelector('.all-age');
const hiddenCheckbox = document.querySelectorAll('.ch-h');

if (allAgeBtn) {
    allAgeBtn.addEventListener('click', e => {
        e.preventDefault();
        hiddenCheckbox.forEach(i => {
            i.classList.toggle('hide');
        });
    });
}


