// Reload Page Start to Top
$(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
});

// Page Loader
$(window).on('load',function(){
    $('.loader').fadeOut();
});

// Navbar Select Section
$(function(){
    $('.navbar ul li a').click(function(){
        $('.navbar ul li a').removeClass('active');
        $(this).addClass('active');
    });
});
$('body').scrollspy({offset: 66,target: ".navbar"})

// Swiper Item
var swiper = new Swiper('.swiper-container', {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// Portfolio Select Item
$(function(){
    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');
    });
});

// Text Clip
$('.animate-clip').animatedHeadline({
    animationType: 'clip'
});

// Item Slider
new WOW().init();

// Section Scroll
$(function() {
    $('#navigation').navpoints({speed: 1000,offset: 65});
    $('#button').navpoints({speed: 1000,offset: 65});
});

// Isotope Filter
(function($){
    var $grid = $('.portfolio-item').isotope({
    });
    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
})(jQuery);

// Image Viewer
$(function(){
    $('.image-link').viewbox({
        setTitle: true,
        margin: 20,
        resizeDuration: 300,
        openDuration: 200,
        closeDuration: 200,
        closeButton: true,
        navButtons: true,
        closeOnSideClick: true,
    });
});

// Progress Animation
$(window).on('scroll', function() {
  $('.html').each(function() {
    if($(this).inViewport('20')) {  
      $(this).addClass('html-anime');
    }
  });
});
$(window).on('scroll', function() {
  $('.css').each(function() {
    if($(this).inViewport('20')) {  
      $(this).addClass('css-anime');
    }
  });
});
$(window).on('scroll', function() {
  $('.bootstrap').each(function() {
    if($(this).inViewport('20')) {  
      $(this).addClass('bootstrap-anime');
    }
  });
});
$(window).on('scroll', function() {
  $('.jquery').each(function() {
    if($(this).inViewport('20')) {  
      $(this).addClass('jquery-anime');
    }
  });
});
$(window).on('scroll', function() {
  $('.php').each(function() {
    if($(this).inViewport('20')) {  
      $(this).addClass('php-anime');
    }
  });
});
$(window).on('scroll', function() {
  $('.photoshop').each(function() {
    if($(this).inViewport('20')) {  
      $(this).addClass('photoshop-anime');
    }
  });
});
$(window).on('scroll', function() {
  $('.progresses-number').each(function() {
    if($(this).inViewport('20')) {  
      $(this).addClass('progresses-popup');
    }
  });
});