// Reload Page Start to Top
$(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
});

// Page Loader
$(window).on('load',function(){
    $('.loader').fadeOut();
});

// Navbar Change Background
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 65){
        $('.navbar-scroll').css('background', 'transparent');
    } else{
        $('.navbar-scroll').css('background', 'rgba(218, 179, 62, 1)');
    }
});

// Navbar Select Section
$(function(){
    $('.navbar ul li a').click(function(){
        $('.navbar ul li a').removeClass('active');
        $(this).addClass('active');
    });
});
$('body').scrollspy({offset: 66,target: ".navbar"})

// Item Slider
new WOW().init();

// Section Scroll
$(function() {
    $('#navigation').navpoints({speed: 1000,offset: 65});
});