(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        const scroll = $(this).scrollTop();
        
        if (scroll > 50) {
            $('.navbar').addClass('shadow-sm scrolled');
            $('.logoDoce').addClass('logoW30');
        } else {
            $('.navbar').removeClass('shadow-sm scrolled');
            $('.logoDoce').removeClass('logoW30');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

   jQuery(document).ready(function($) {
    // Agregamos un delay de 300ms para asegurar que el DOM esté listo
    setTimeout(function() {
        var testimonialCarousel = $(".testimonial-carousel");
        
        // Forzamos la destrucción de cualquier instancia previa
        testimonialCarousel.trigger('destroy.owl.carousel'); 

        testimonialCarousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin:5,
            loop: true,
            center: true,
            dots: true,
            nav: false,
            responsive: {
                0:{ items:2},
                768:{ items:2 },
                992:{ items:2 }
            }
        });
        console.log("Carrusel de testimonios inicializado");
    }, 300);
});

    
})(jQuery);

