$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $(".top-nav").toggleClass('open');
    })
})

// const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

// tl.to('.text', {y: "0%", duration: 1});
// tl.to(".slider", {y: "-100%", duration: 2, delay: 0});
// tl.to(".intro", {y: "-100%", duration: 1});
// tl.fromTo("header", {opacity: 0}, {opacity: 1, duration: 1});
// tl.fromTo("body", {opacity: 0}, {opacity: 1, duration: 1});