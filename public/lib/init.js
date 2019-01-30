$(window).scroll(function () {
    toggleMenu();
});

function toggleMenu() {
    const menu = $('.side-menu');
    const firstPosition = $('#accueil').offset().top;
    const position = $(window).scrollTop();

    if (position >= firstPosition) menu.addClass('visible');
    else menu.removeClass('visible');
}

$(function () {
    const elm = document.querySelector('.side-menu');
    new MenuSpy(elm);
});