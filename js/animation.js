$(".arrow-right").click(function(){
    $(this).toggleClass("rotated");
});

function animateText(){
    var typed2 = new Typed('#typing-animation', {
        strings: ['Welcome to my mini portfolio website . . . ^1000', 'It is not great, but not bad'],
        typeSpeed: 30,
        backSpeed: 30,
        smartBackspace: true,
        loop: true
    });
}


var typed3 = new Typed('#about-me-animation', {
    strings: ['Hi, I\'m Elvin . . .^5000  and this is my story! ^2000'],
    typeSpeed: 30,
    loop:true
});     




animateText();
