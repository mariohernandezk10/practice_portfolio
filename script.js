$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $(".top-nav").toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('menu-toggler').removeClass('open');
        $(".top-nav").removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
})

// const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

// tl.to('.text', {y: "0%", duration: 1});
// tl.to(".slider", {y: "-100%", duration: 2, delay: 0});
// tl.to(".intro", {y: "-100%", duration: 1});
// tl.fromTo("header", {opacity: 0}, {opacity: 1, duration: 1});
// tl.fromTo("body", {opacity: 0}, {opacity: 1, duration: 1});