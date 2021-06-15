$(function(){
    // 현재 보여지는 배너를 체크할 변수 만들기
    var showBanner=0;
    // 첫번째 배너를 복하사여 마지막에 붙이기
    var obj = $(".banner>.b1").clone();
    $(".banner").append(obj);
    
    function moveBanner(){
        if(showBanner==3){
            showBanner=0;
            $(".banner").css("margin-top",0)
        }
        showBanner++;
        
        $(".banner").stop().animate({
            marginTop:-showBanner*360+"px"
        },1000)
    }
    
    $("body").click(function(){
        moveBanner();
    })
//    setInterval(moveBanner,3000);
})