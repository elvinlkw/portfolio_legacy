
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

})

var typed2 = new Typed('#typing-animation', {
    strings: ['Welcome to my mini portfolio website . . . ^1000', 'It is not great, but not bad'],
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
