$(window).on("load", function(){
    if( $(window).width()>990 ) {
        wheight = $(window).height()-$(".navbar").outerHeight();
        $(".bg-la-firma").height( wheight+"px" );
    }
});

$(window).resize(function(){
    if( $(window).width()<768 ) {
        $(".bg-la-firma").removeAttr("style");
    } else {
        wheight = $(window).height()-$(".navbar").outerHeight();
        $(".bg-la-firma").height( wheight+"px" );
    }
});