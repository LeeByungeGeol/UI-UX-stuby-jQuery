$(function() {
    // .hamBtn>a를 클릭하면 active클래스가 추가되도록
    $(".hamBtn>a").click(function() {
        if ($(this).hasClass("active")) {
            $("nav").css({
                "left": "-100%",
            });
            // 짠
            // $("nav").animate({
            //     "left": "-100%",
            // }, 500);
            // 스르륵
        } else {
            $("nav").css({
                "left": 0,
            });
            // $("nav").animate({
            //     "left": 0,
            // }, 500);
        }
        $(this).toggleClass("active");
    });
    // 스타벅스
    $("#nav>li").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").children(".sub").css("display", "none");
        } else {
            $(this).addClass("active")
                .children(".sub").css("display", "block");
        }
    })
})