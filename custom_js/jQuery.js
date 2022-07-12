// owl carousel init for auto play start
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    stagePadding: 10,
    responsiveBaseElement: 'body',
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        900: {
            items: 3,
        },
        1100: {
            items: 4,
        },
    },
});

// owl carousel init for auto play finish