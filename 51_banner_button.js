$(function() {
    $(".btn>li").click(function() {
        // 클릭한 li의 순서 찾기
        var sNum = $(this).index();
        console.log(sNum);
        $(".banner").stop().animate({
            "margin-left": -sNum * 1200 + "px"
        }, 1000)
        $(this).addClass("active")
            .siblings().removeClass("active")
    })
})