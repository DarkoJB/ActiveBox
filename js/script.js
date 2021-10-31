$(function(){
    // FIXED NAVBAR
    let header = $("#header");
    let hero = $("#hero");
    let heroHeight = hero.innerHeight();
    let scrollP = $(window).scrollTop();
    let navigation = $("#navigation");
    let toggleNav = $("#toggleNav");

    scrollCheck(scrollP, heroHeight);

    $(window).on("scroll resize", function() {
        heroHeight = hero.innerHeight();
        scrollP = $(this).scrollTop();

        scrollCheck(scrollP, heroHeight);
    });

    function scrollCheck(scrollP, heroHeight) {
        if(scrollP > heroHeight){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }

    //SCROLL
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let blockID = $(this).data('scroll');
        let blockOffset = $(blockID).offset().top;

        navigation.removeClass("show");

        $("html, body").animate({
            scrollTop: blockOffset - 150
        }, 400);
    });


    // Burger Menu

    toggleNav.on("click", function(event){
        event.preventDefault();

        navigation.toggleClass("show");
    });

    //Carousel
    $(function(){
        $('.carousel_image img:gt(0)').hide();
        setInterval(function(){
          $('.carousel_image :first-child').fadeOut()
             .next('img').fadeIn()
             .end().appendTo('.carousel_image');},
          5000);
    });
    $(function(){
        $('.carousel_author p:gt(0)').hide();
        setInterval(function(){
          $('.carousel_author :first-child').fadeOut()
             .next('p').fadeIn()
             .end().appendTo('.carousel_author');},
          5000);
    });
    $(function(){
        $('.dots span:gt(0)').addClass(".fade");
        setInterval(function(){
          $('.dots :first-child').addClass(".fade")
             .next('span').removeClass(".fade")
             .end().appendTo('.dots');},
          5000);
    });

});

