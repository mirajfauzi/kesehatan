$(".indicator > span").on('click', function() {
    $(".indicator > span").removeClass("active");
    $(this).addClass("active");
    var index = $(".indicator > span").index(this);
    index++;
    $(".slideshow > ul > li").removeClass("active");
    $(".slideshow > ul > li:nth-child("+index+")").addClass("active");
});

setInterval(function() {
    var a = $(".indicator > span.active").next("span");
    if (a.length == 0) $(".indicator > span:first-child").click();
    else a.click();

}, 5000);
