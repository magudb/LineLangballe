
// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main-nav').hasClass('open-nav')) {
        $('.main-nav').removeClass('open-nav');
        $('.masthead').removeClass('revealed');
        $('.slogan-holder').slideUp(1000,function(){
            $('.menu-panel').stop().animate({
                                right: "3000px"
                                }, 2000, function() {
                                // Animation complete.
                                });
        });
    } else {
        $('.main-nav').addClass('open-nav');
        $('.masthead').addClass('revealed');
       $('.menu-panel').stop().animate({
                                right: "0px"
                                }, 1000, function() {
                                // Animation complete.
                                $('.slogan-holder').slideDown(1000);
                                });
    }
});


$('.mastwrap').click(function(){
        $('.main-nav').removeClass('open-nav');
        $('.masthead').removeClass('revealed');
})

    //Navigation Sub Menu Triggering
    $('.trigger-sub-nav').click(function(){
        $('.sub-nav').slideUp('fast');
        $(this).find('.sub-nav').slideDown('slow');
    })
