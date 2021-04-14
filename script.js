$(document).ready(function () {
// In this function we are using an event listener using jquery to listen for 
// a click on the hamburger menu, we do this by grabbing the tag by its class
    $('.menu-toggler').on('click', function () {
        // here we are hiding and showing the class "open" via the method toggleClass
        // Info about toggleClass https://api.jquery.com/toggleclass/
        $(this).toggleClass('open');
        
        $(".top-nav").toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
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

});

