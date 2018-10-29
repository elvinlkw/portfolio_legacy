$(document).ready(function(){

    //code for arrow in Experience Section;
    var $skills_arrow = $('.skill-arrow');
    var $skills_bToggle = $('input');

    $skills_arrow.click(function() {
        if($skills_bToggle.is(':checked')){}
        else{
            $(this).toggleClass("rotated");
            if($(document).width() < 768){
                $(this).closest('.skill-wrapper').find('.skill-arrow-content').slideToggle();
                $(".hidden-mobile").hide();
                $(this).closest('.skill-wrapper').find($('#skill-arrow-content-mobile')).slideToggle();
            }else{
                $(this).closest('.skill-wrapper').find('.skill-arrow-content').slideToggle();
            }
        }    
    });

    $skills_bToggle.click(function() {
        if($(document).width() < 768){
            $('.skill-arrow-content').slideToggle();
                $(".hidden-mobile").hide();
                $('#skill-arrow-content-mobile').slideToggle();
        }else{
            $('.skill-arrow-content').slideToggle();
        }

        if($skills_bToggle.not(':checked')){
            $($skills_arrow).toggleClass("rotated");
        }
    });

    //site-header section

    $('.burger').click(function(){
        $('body').toggleClass('menu-opened');
        $('.site-navigation').fadeToggle();
    });

    $('.site-item').click(function(){
        $('body').toggleClass('menu-opened');
        $('.site-navigation').fadeToggle();
    });

    var skillsSec = $("#main").offset().top;
    var projSec = $("#section-projects").offset().top;
    var contactSec = $('#section-contact').offset().top;

    $(window).scroll(function(){
        let $window = $(window).scrollTop();
        if($window < 3*skillsSec/4){
            $('#site-home').addClass('bold');
            $('#arrow-home').fadeIn();
            $('#site-about').removeClass('bold');
            $('#arrow-about').fadeOut();
        }if($window > 3*skillsSec/4 && $window < 3*projSec/4){
            $('#site-about').addClass('bold');
            $('#arrow-about').fadeIn();
            $('#site-home').removeClass('bold');
            $('#site-project').removeClass('bold');
            $('#arrow-home').fadeOut();
            $('#arrow-project').fadeOut();
        }if($window > 3*projSec/4 && $window < 3*contactSec/4){
            $('#site-project').addClass('bold');
            $('#arrow-project').fadeIn();
            $('#site-about').removeClass('bold');
            $('#site-contact').removeClass('bold');
            $('#arrow-about').fadeOut();
            $('#arrow-contact').fadeOut();
        }if($window > 3*contactSec/4){
            $('#site-contact').addClass('bold');
            $('#site-project').removeClass('bold');
            $('#arrow-contact').fadeIn();
            $('#arrow-project').fadeOut();
        }
    });


    // Code for modal pop up in project section
    var $project = $('.wrapper-project');

    $project.click(function() {
        $(this).find('.modal').css('display', 'block');
        $(this).find('.modal-content').slideDown();
        $('body').css('overflow', 'hidden');
    });

    $(window).click(function(event){
        if(event.target.id == 'myModal'){
            $('.modal-content').slideUp();
            $('.modal').css("display", "none");
            $('body').css('overflow', 'auto');
        }
    });

    // Typing animation for landing and about me page.
    var lp_animation = new Typed('#lp-animation', {
        strings: ['Welcome to my mini portfolio website . . . ^1000', 'Let me tell you more about myself.'],
        typeSpeed: 30,
        backSpeed: 30,
        smartBackspace: true,
        loop: true
    });

    var about_me_animation = new Typed('#about-me-animation', {
        strings: ['Hi, I\'m Elvin . . .^5000  and this is my story! ^2000'],
        typeSpeed: 30,
        loop:true
    });

    //Smooth-Scrolling Code
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
});