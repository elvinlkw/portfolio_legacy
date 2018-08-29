
var settings = $("#navy");

$("#navbar").hide();

//menubar
settings.hover(function(){
    $("#navbar").slideDown('slow');
});

var menu = $(".menu");

menu.hover(function(){
    $(this).find(".arrow-fade-in").css("opacity","1");
        }, function(){
            $(this).find(".arrow-fade-in").css("opacity","0");
    
});

$("#navbar").hover(function(){
    $("#navbar").css({
        "opacity": "1",
        "visibility": "visible"});
    }, function(){
        $("#navbar").slideUp('slow');
});

//arrow
var arrow = $(".arrow-right");

arrow.click(function(){

    if(bToggle.is(':checked')){

    }else{
        $(this).toggleClass("rotated");

        $(this).closest('.skill-wrapper').find('.arrow-content').slideToggle();
    }

});

//Skills Section Toggle Button

var bToggle = $(".toggle-button");

bToggle.click(function() { 
    $(".arrow-content").slideToggle();
    if(bToggle.not(':checked')){
        $(arrow).toggleClass("rotated");
    }

});

var menu_output = $(".menu-click");

menu_output.click(function(){
    $("#navbar").slideUp('slow');
});

var typed2 = new Typed('#typing-animation', {
    strings: ['Welcome to my mini portfolio website . . . ^1000', 'Let me tell you more about myself.'],
    typeSpeed: 30,
    backSpeed: 30,
    smartBackspace: true,
    loop: true
});

var typed3 = new Typed('#about-me-animation', {
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