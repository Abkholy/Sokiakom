$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
autoplayTimeout: 1500,
rtl:true,
autoplayHoverPause: true,
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


function redirect(link) {
    window.location.href = link;
}