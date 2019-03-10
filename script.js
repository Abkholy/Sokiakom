$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

var owl = $(".owl-carousel");


owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl.carousel');
    } else {
        owl.trigger('prev.owl.carousel');
    }
    e.preventDefault();
});


// Go to the next item
$('.owl-carousel .customNextBtn').click(function (e) {
    e.preventDefault();
    owlCarousel.trigger('next.owl.carousel');
});
// Go to the previous item
$('.owl-carousel .customPrevBtn').click(function (e) {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    e.preventDefault();
    owlCarousel.trigger('prev.owl.carousel', [300]);
});