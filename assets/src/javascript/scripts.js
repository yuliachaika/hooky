'use strict';
;
(function($){

    $(document).ready( function () {

        //Foundation init
        $(document).foundation();

        //slick for hero
        $(".slider").slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          fade: true,
          respondTo: 'window',
          appendArrows: $('.slide-controls'),
          prevArrow: $('.slide-arrow-hero--prev'),
          nextArrow: $('.slide-arrow-hero--next'),
          appendDots: $('.slide-controls'),
          dots: true,
          dotsClass: 'custom-dots-hero'
        });

        //slick for cards
        $(".cards-slider__slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            respondTo: 'window',
            appendArrows: $('.slide-cards'),
            nextArrow: $('.slide-arrow-cards--next'),
            dots: false,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
                }
            }
            ]
        });

        //slick for socials 
        $(".slider-social__slider").slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          fade: true,
          arrows: false,
          respondTo: 'window',
          autoplay: true,
          autoplaySpeed: 2000,
          appendDots: $('.slide-social'),
          dots: true,
          dotsClass: 'custom-dots-social'
        });


        //counter
        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });


    });

    
})(jQuery);