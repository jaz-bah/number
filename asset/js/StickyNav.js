$(window).scroll(function(){
    if($(this).scrollTop() > 60){
        $('.StickyNav').addClass('sticky')
    } else{
        $('.StickyNav').removeClass('sticky')
    }
});