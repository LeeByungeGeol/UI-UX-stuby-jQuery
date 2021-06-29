$(function () {
    //보여지는 배너 체크 변수
    var showBanner = 0;

    //복사전 자식 개수
    var liCount = $(".videoBanner>li").length;

    //배너 너비값
    var liWidth = $(".videoBanner>li").width();
    console.log(liWidth);
    //배너 마지막 복사
    var objLast = $(".videoBanner>li:last").clone();
    //배너 1,2 복사
    var objFirst = $(".videoBanner>li:lt(2)").clone();

    $(".videoBanner").append(objFirst);
    $(".videoBanner").prepend(objLast);

    //복사후 자식 개수 
    var count = $(".videoBanner>li").length;

    //부모의 너비
    $(".videoBanner").width(count*liWidth);

    //li 너비
    $(".videoBanner>li").width(liWidth);


    function moveVideo(){
        $(".videoBanner").stop().animate({
            "margin-left":-showBanner*liWidth - liWidth/2
        },500)
        $(".videoBanner>li").children(".video").stop().fadeOut(500);
        $(".videoBanner>li").eq(showBanner+1).children(".video").stop().fadeIn(500);
    }
    //rightBtn
    $(".rightBtn").on("click",function(){
        if(showBanner == liCount){
            showBanner=0;
            $(".videoBanner").css("margin-left",-liWidth/2)
        }
        showBanner++;
        moveVideo();
    })

    //leftBtn
    $(".leftBtn").on("click",function(){
        if(showBanner==0){
            showBanner=liCount;
            $(".videoBanner").css("margin-left",-showBanner*liWidth-liWidth/2)
        }
        showBanner--;
        moveVideo();
    })
})