'use strict';
;
(function($){

  //spinner
  $(window).on('load', function () {
    var $preloader = $('#preloader'),
    $spinner   = $('#loader');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

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

        //slick for gallery
        // gallery first slider
        $slickSlider = $('.gallery__wrap-row--narrow');
        settingsSlider = {
          dots: true,
          arrows: false,
          responsive: [
          {
            breakpoint: 1039,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },

          {
            breakpoint: 766,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 635,
            settings: {
              slidesToShow: 1,
            }
          }
          ]
         }

         // // gallery second slider
         $slickSliderWide = $('.gallery__wrap-row--wide');
         settingsSliderWide = {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
        slickOnMobile( $slickSlider, settingsSlider);
        slickOnMobile( $slickSliderWide, settingsSliderWide);

        // slick on mobile
        function slickOnMobile(slider, settings){
          $(window).on('load resize', function() {
            if ($(window).width() > 1039) {
              if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
              }
              return
            }
            if (!slider.hasClass('slick-initialized')) {
              return slider.slick(settings);
            }
          });
        };

        //counter
        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });

        //three-col-toggler 
        $('.three-col-col__wrap').on('click', function() {
        $('.three-col-col').find('.three-col-col__wrap--hover').removeClass('three-col-col__wrap--hover');
        $( this ).addClass('three-col-col__wrap--hover');
        console.log(this);
});



      });


})(jQuery);