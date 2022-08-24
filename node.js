/* Nav focus progress */
var navBtns = document.querySelectorAll('#pc-nav ul li');
var navFocus = document.querySelector('.nav-focus');
var currentNav = 0;

console.log([navBtns[0]]);

function changeCurrentNav(left, width) {
    navFocus.style.left = `${left}px`;
    navFocus.style.width = `${width}px`;
}

changeCurrentNav(navBtns[0].offsetLeft, navBtns[0].offsetWidth);

navBtns.forEach( (navBtn) => {
    navBtn.addEventListener('click', (e) => {
        changeCurrentNav(navBtn.offsetLeft, navBtn.offsetWidth);
    });
});