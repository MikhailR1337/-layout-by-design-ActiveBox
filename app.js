$(function() {

    /* Fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    /* Check event on page */
    $(window).on("scroll resize", function() {
        /* update introH */
        introH = intro.innerHeight();

        /* checked scroll position */
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        /* Add/remove class for header */
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll')

        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 55
        }, 700);
        
    });


    /* Nav Toggle */

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
    

    /* Reviews https://kenwheeler.github.io/slick/ */

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
      });


});
