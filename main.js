const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger__menu');
const popup = document.getElementById('popup');
const body = document.querySelector('body');

hamburger.addEventListener('click', function (e) {
    if (e.target.classList.contains('hamburger__menu') || e.target.classList.contains('hamburger')) {
        hamburgerMenu.classList.toggle('hamburger__menu--animated');
        popup.classList.toggle('popup--active');
        body.classList.toggle('body--without-scroll');
    }

})