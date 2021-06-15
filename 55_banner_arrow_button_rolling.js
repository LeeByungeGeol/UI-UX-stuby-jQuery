$(function(){
    // 보여지는 배너를 체크할 변수만들기
    var showBanner = 0;
    // 첫번째 배너를 복사하여 배너의 마지막에 붙이기
    var obj = $(".banner>.b1").clone();
    $(".banner").append(obj);

    // 배너이도와 버튼 변경
    function moveBanner(){
        $(".banner").stop().animate({
            // -n * 100%
            marginLeft : -showBanner*100+"%"
        },1000)
        
        if(showBanner==4){
           $(".btn>li").eq(0).addClass("active").siblings().removeClass("active")
           }
           else{
               $(".btn>li").eq(showBanner).addClass("active")
            .siblings().removeClass("active");
           }
    }
    // 버튼을 클릭하면 배너가 해당하는 위치로 이동하고, 버튼에 active 클래스 추가하기
    $(".btn>li").click(function(){
        showBanner = $(this).index();
        console.log(showBanner);
        moveBanner();
    })
    // 오른쪽 버튼을 클릭하면
    $(".rightBtn").click(function(){
        
        if(showBanner == 4){
            showBanner = 0;
            $(".banner").css("margin-left",0);
        }
        showBanner++;
        moveBanner();
    })
    $(".leftBtn").click(function(){
        if(showBanner==0){
            showBanner=4;
            $(".banner").css("margin-left",-100*showBanner+"%");
        }
        showBanner--;
        moveBanner();
    })
})