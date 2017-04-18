$(".splash-indicator > a").on('click', function(e) {
    e.preventDefault();
    $(".splash-indicator > a").removeClass("active");
    $(this).addClass("active");
    var index = $(".splash-indicator > a").index(this);
    index++;
    $(".splash > .splash-slide").removeClass("active");
    $(".splash > .splash-slide:nth-child("+index+")").addClass("active");
});

setInterval(function() {
    var a = $(".splash-indicator > a.active").next("a");
    if (a.length == 0) $(".splash-indicator > a:first-child").click();
    else a.click();
}, 5000);
