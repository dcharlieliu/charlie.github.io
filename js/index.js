$(function(){
    $(".within-icon ul li").mouseenter(function(){
        var x=$(this).find('a').attr("change-text");
        $(this).find('a').css("background-position","bottom center").parent().siblings().find("a").css("background-position","top center");
        $(".within-bottom").html(x);
    });
    $(".within-icon ul li").mouseleave(function(){
        $(".within-bottom").html('wuhan,china');
        $(".within-icon ul li").find('a').css("background-position","top center");
    });
})