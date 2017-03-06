$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();
    
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function() {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function() {
        $("#mycarousel").carousel('cycle');
    });

    $(".feed-weixin").popover({
        placement: "top",
        trigger: "hover",
        container: "body",
        html: true
    });

    $(".feed-weibo, .feed-tqq, .feed-rss").tooltip({
        container: "body"
    });

    /*回到顶部功能*/
    $("body").append('<div class="rollto"><a href="javascript:;"></a></div>');
    $(document).on("click", '.rollto a', function() {
        $("html,body").animate({
            scrollTop: 0
        });
    });
    $(window).scroll(function() {
        var a = $(".rollto");
        if (document.documentElement.scrollTop + document.body.scrollTop > 200) {
            a.fadeIn();
        } else {
            a.fadeOut();
        }
    });
});
