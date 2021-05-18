/**
 * Origano
 *
 * This file contains all template JS functions
 *
 * @package Origano
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Owl  
        - Home Slider
        - Testimonial Slider
        - Products Slider   
        - Pure Organic Slider   
        - Popular Product Slider 
        - Top Selling Slider
        - Sale Product Slider
        - Featured Product Slider
        - Testimonial Widget Slider
        - Deal Slider
        - Store Slider 
        - Product Gallery Slider 
 * 02 - Navigation / Menu
 * 03 - Movment Effect
 * 04 - Search
 * 05 - Products Filter 
 * 06 - Feature Products Filter
 * 07 - Lightbox Gallery
        - Product Gallery
        - Instagram Lightbox Gallery
        - Products Lightbox Gallery
        - Products Masonry Lightbox Gallery
 * 08 - Healthy Deal Lightbox 
 * 09 - Price Slider / Filter
 * 10 - Quantity Increase Decrease
 * 11 - Product Zoom 
 * 12 - Event Countdown
 * 13 - Load More - Blog Grid
 * 14 - Load More - Blog Listing Block
 * 15 - Load More - Shop Two Product Block
 * 16 - Load More - Gallery Grid
 * 17 - Load More - Gallery Grid 2
 * 18 - Video Play
 * 19 - Mailchimp Form
 * 20 - Dropdown Select
 * 21 - Cart Js
 * 21 - Preloader

--------------------------------------------------------------*/
(function($) {
  "use strict";

  var $window = $( window )

// Owl Carousel 

  // Home Slider
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 10000,
      slideSpeed: 10000,
      smartSpeed: 2000,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

    // Testimonials Slider    
    $("#testimonials-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: false,
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: true,
        },
        1100: {
            items: 1,
            nav: false,
            dots: true,
        }
      }
    });

  // Products Slider       
    var owl = $('.ver-one-feature-slider').owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoplayTimeout: 10000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 7000,
      smartSpeed: 1500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
            dots: false,
        },
        1100: {
            items: 5,
            nav: false,
            dots: false,
        },
        1400: {
            items: 6,
            nav: true,
            dots: false,
        }
      }
    });
    /* Animate Filter for Products Slider  */
    var owlAnimateFilter = function(even) {
      $(this)
      .addClass('__loading')
      .delay(70 * $(this).parent().index())
      .queue(function() {
        $(this).dequeue().removeClass('__loading')
      })
    }
    $('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
      var filter_data = $(this).data('filter');
      /* return if current */
      if($(this).hasClass('btn-active')) return;
      /* active current */
      $(this).addClass('btn-active').siblings().removeClass('btn-active');
      /* Filter */
      owl.owlFilter(filter_data, function(_owl) { 
        $(_owl).find('.item').each(owlAnimateFilter); 
      });
    });

  // Pure Organic Slider
    $("#pure-organic-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 10000,
      slideSpeed: 10000,
      smartSpeed: 2500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

  // Popular Product Slider
    $("#popular-product-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 8000,
      slideSpeed: 6000,
      smartSpeed: 1500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

  // Top Selling Slider
    $("#top-selling-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 11000,
      slideSpeed: 8000,
      smartSpeed: 1500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

  // Sale Product Slider
    $("#sale-product-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 13000,
      slideSpeed: 11000,
      smartSpeed: 1500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

    // Products Slider    
    $("#product-dtl-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
            dots: false,
        },
        1100: {
            items: 5,
            nav: false,
            dots: false,
        },
        1400: {
            items: 6,
            nav: false,
            dots: false,
        }
      }
    });

  // Featured Product Slider    
    $("#featured-product-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: true,
      autoplayTimeout: 7000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: true,
            dots: false,
        },
        1100: {
            items: 1,
            nav: true,
            dots: false,
        }
      }
    });

    // blog Slider    
      $("#blog-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            nav: true,
            dots: true,
        }
      }
    });

    // Summer Slider    
    $("#summer-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 1,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            nav: true,
            dots: false,
        }
      }
    });

  // Testimonial Widget Slider    
    $("#testimonial-widget-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: false,
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            nav: false,
            dots: true,
        }
      }
    });
    
  // Deal Slider    
    $("#deal-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            nav: true,
            dots: false,
        }
      }
    });

  // Store Slider    
    $("#product-gallery-slider").owlCarousel({
      loop: true,
      items: 4,
      dots: false,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 5,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-sort-asc" aria-hidden="true"></i>', '<i class="fa fa-sort-desc" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 3,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 3,
            nav: true,
            dots: false,
        },
        1100: {
            items: 4,
            nav: true,
            dots: false,
        }
      }
    });

  // Product Gallery Slider    
    $("#product-gallery-slider-two").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 5,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-sort-asc" aria-hidden="true"></i>', '<i class="fa fa-sort-desc" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 3,
            nav: true,
            dots: false,
        },
        1100: {
            items: 3,
            nav: true,
            dots: false,
        }
      }
    });

  // Clients Slider    
    $("#client-slider").owlCarousel({
      loop: true,
      items: 5,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 4,
            nav: false,
            dots: false,
        },
        768: {
            items: 4,
            nav: false,
            dots: false,
        },
        1100: {
            items: 5,
            nav: false,
            dots: false,
        }
      }
    });

// Navigation / Menu
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

// Movment Effect
    var layer1 = $('.pure-organic-block-img');
    layer1.mousemove(function(e){
      var valueX = (e.pageX * -1/20);
      var valueY = (e.pageY * -1/20);
      $('.main-img img').css({
        'transform': 'translate3d('+valueX+'px,'+valueY*0.1+'px,0)' 
      });
    });

// Search
    $('.search-icon').on('click', function (e) {
      e.preventDefault();
      $('.search').addClass('active');
    });
    $('.search-close').on('click', function (e) {
      e.preventDefault();
      $('.search').removeClass('active');
    });    

// Products Filter
    var selectedClass = "";
      $(".fil-cat").on('click',function(){ 
      selectedClass = $(this).attr("data-rel"); 
       $("#ver-one-product-main-block").fadeTo(100, 0.1);
      $("#ver-one-product-main-block .products-block-col").not("."+selectedClass).fadeOut().removeClass('scale-anm');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('scale-anm');
        $("#ver-one-product-main-block").fadeTo(300, 1);
      }, 300);     
      $(this).siblings().removeClass('btn-active');
      $(this).addClass('btn-active');
    });

// Feature Products Filter
    var selectedClass = "";
      $(".fil-cat").on('click',function(){ 
      selectedClass = $(this).attr("data-rel"); 
       $("#products").fadeTo(100, 0.1);
      $("#products .shop-two-products-block").not("."+selectedClass).fadeOut().removeClass('scale-anm');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('scale-anm');
        $("#products").fadeTo(300, 1);
      }, 300);
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });

// Lightbox Gallery
    // Product Gallery
    $('.product-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Gramin Mantra</small>';
        }
      }
    });

    // Instagram Lightbox Gallery
      $('.insta-gallery').magnificPopup({
        delegate: '.insta-img a',
        type: 'image',    
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',    
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Gramin Mantra</small>';
          }
        }
      });

    // Products Lightbox Gallery
      $('.popup-gallery-grid').magnificPopup({
        delegate: '.gallery-grid-block a',
        type: 'image',    
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',    
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Gramin Mantra</small>';
          }
        }
      });

    // Products Masonry Lightbox Gallery
      $('.popup-masonry-block').magnificPopup({
        delegate: '.gallery-masonry-img a',
        type: 'image',    
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',    
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Gramin Mantra</small>';
          }
        }
      });
    
// Healthy Deal Lightbox 
    $('.healty-deal-text').magnificPopup({
      delegate: '.healty-deal-icon li a',
      type: 'image',    
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',    
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Gramin Mantra</small>';
        }
      }
    });

// Price Slider / Filter
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 80, 399 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    // File Upload
        $('#file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $('#filename').html(filename);
    });

// Quantity Increase Decrease
    $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="fa fa-sort-desc"></i></div><div class="inc qtybutton"><i class="fa fa-sort-asc"></i></div>');
      $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == " ") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      } else {
      newVal = 0;
        }
        }
    $button.parent().find("input").val(newVal);
    });      

// Product Zoom 
    $("#zoom-01").elevateZoom({gallery:'gallery-01', zoomType: 'lens', lensShape: 'round', lensSize : 200, galleryActiveClass: 'active', imageCrossfade: true}); 
    $("#zoom-01").on("click", function(e) {  
      var ez =   $('#zoom-01').data('elevateZoom'); 
      $.fancybox(ez.getGalleryList());
      return false;
    }); 

// Event Countdown     
    if($('.comming-countdown').length){  
      $('.comming-countdown').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime('' + '<div class="counter-col-days"><span class="count-days">%D </span>:</div> ' + '<div class="counter-col"><span class="count-hours">%H</span> <span class="count-number">:</span> </div>  ' + '<div class="counter-col"><span class="count-minutes">%M</span> <span class="count-number">:</span> </div>  ' + '<div class="counter-col"><span class="count-seconds">%S</span></div>'));
      });
     });
    }    

// Load More - Blog Grid
      $(".blog-grid-block").slice(0, 9).show();
      $("#loadMore").on('click', function (e) {
          e.preventDefault();
          $(".blog-grid-block:hidden").slice(0, 3).slideDown();
          if ($(".blog-grid-block:hidden").length == 0) {
              $("#load").fadeOut('slow');
          }
      });

// Load More - Blog Listing Block
    $(".blog-listing-block").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".blog-listing-block:hidden").slice(0, 1).slideDown();
        if ($(".blog-listing-block:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

// Load More - Shop Two Product Block
    $(".shop-two-products-block").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".shop-two-products-block:hidden").slice(0, 3).slideDown();
        if ($(".shop-two-products-block:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

// Load More - Shop Two Product Block
    $(".shop-three-products-block").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".shop-three-products-block:hidden").slice(0, 4).slideDown();
        if ($(".shop-three-products-block:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

// Load More - Gallery Grid
    $(".gallery-grid-1-block").slice(0, 9).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".gallery-grid-1-block:hidden").slice(0, 3).slideDown();
        if ($(".gallery-grid-1-block:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

// Load More - Gallery Grid 2
    $(".gallery-grid-2-block").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".gallery-grid-2-block:hidden").slice(0, 4).slideDown();
        if ($(".gallery-grid-2-block:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

// Video Play     
    $('.btn-video-play').on('click',function() {
      $('.video-item .video-preview').append(video_url);
      $(this).hide();
    });
    
// Mailchimp Form
    $('#subscribe-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

// Dropdown Select
    $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
        var $target = $( event.currentTarget );
        $target.closest( '.dropdown' )
           .find( '[data-bind="label"]' ).text( $target.text() )
              .end()
           .children( '.dropdown-toggle' ).dropdown( 'toggle' );
        return false;
     });

// Cart Js       
    // on mouse enter show cart widget
      $("#cart").hover(function() {
        $(".cart-box").addClass("active");
      });
    // on mouse leave hide cart widget
      $(".cart-box").mouseleave(function() {
        $(".cart-box").removeClass("active");
      }); 

// Preloader   
    $window.on('load', function(){  
      $('.status').fadeOut();
      $('.preloader').delay(350).fadeOut('slow'); 
    });     

})(jQuery);
