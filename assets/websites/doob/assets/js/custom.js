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

// Item Slider
new WOW().init();

// Section Scroll
$(function() {
    $('#navigation').navpoints({speed: 1000,offset: 65});
});

// Image Viewer
$(function(){
    $('.feature-img').viewbox({
        setTitle: true,
        margin: 20,
        resizeDuration: 300,
        openDuration: 200,
        closeDuration: 200,
        closeButton: true,
        navButtons: true,
        closeOnSideClick: true,
        nextOnContentClick: true
    });
});