"use strict";

(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  bmix PRELOADER JS INIT
  bmix STICKY MENU JS INIT
  bmix HERO SLIDER JS INIT
  bmix COUNTER JS INIT
  bmix TESTIMONIAL SLIDER JS INIT
  bmix SERVICE SLIDER SECTION JS INIT
  bmix SLIDER LOGO JS INIT
  bmix SERVICE CONTENT SLIDER SECTION JS INIT
  bmix MAGNIFIC POPUP JS INIT
  bmix TESTIMONIAL SLIDER JS INIT
  bmix PORTFOLIO MASONAY FILTER JS
  bmix MAP JS INIT
  bmix TOGGOLE PASSWOR JS INIT
  bmix WOW JS INIT
  bmix DATEPICKER JS INIT
  bmix SELECT OPTION JS INIT
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    bmix PRELOADER JS INIT
    --------------------------------------------------------------*/

    $(".bmix-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    bmix STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    bmix COUNTER JS INIT
    --------------------------------------------------------------*/
    var bmix_counter = $('#bmix-counter');
    if (bmix_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(bmix_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.bmix-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }
    /*--------------------------------------------------------------
    bmix TESTIMONIAL SLIDER JS INIT
    --------------------------------------------------------------*/
    var t_slider = $('.bmix-t-slider-init');
    if (t_slider.is_exist()) {
      t_slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: true,
        centerMode: true,
        centerPadding: '200px',
        lazyLoad: 'progressive',
        responsive: [{
          breakpoint: 1349,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    // bmix SERVICE SLIDER SECTION JS INIT

    /*--------------------------------------------------------------
    SOFAX BRAND SLIDER JS INIT
    --------------------------------------------------------------*/
    var brand_slider = $('.bmix-brand-slider');
    if (brand_slider.is_exist()) {
      brand_slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }
    /*--------------------------------------------------------------
    bmix MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {
    /*--------------------------------------------------------------
    bmix PORTFOLIO MASONAY FILTER JS
    ------------------------------------------------------------*/
  }); // End window LODE

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {}); // End window LODE

  /*--------------------------------------------------------------
  bmix MAP JS INIT
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'fugu'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>fugu' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  // external js: isotope.pkgd.js

  // bmix TOGGOLE PASSWOR JS INIT

  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // bmix WOW JS INIT

  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();
  AOS.init({
    duration: 1200
  });
  var currentYear = new Date().getFullYear();
  $('#current-year').text(currentYear);

  // bmix DATEPICKER JS INIT

  jQuery(document).ready(function () {
    jQuery('#datepicker').datepicker({
      format: 'dd-mm-yyyy',
      startDate: '+1d'
    });
  });
  jQuery(document).ready(function () {
    jQuery('#id_StartDate').datepicker({
      dateFormat: 'yy/mm/dd',
      startDate: '0d',
      minDate: 0,
      highlightWeek: true
    });
  });

  // bmix SELECT OPTION JS INIT

  var index = 1;
  var on = function on(listener, query, fn) {
    document.querySelectorAll(query).forEach(function (item) {
      item.addEventListener(listener, function (el) {
        fn(el);
      });
    });
  };
  on('click', '.selectBtn', function (item) {
    var next = item.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
  });
  on('click', '.option', function (item) {
    item.target.parentElement.classList.remove('toggle');
    var parent = item.target.closest('.select').children[0];
    parent.setAttribute('data-type', item.target.getAttribute('data-type'));
    parent.innerText = item.target.innerText;
  });
})(jQuery);