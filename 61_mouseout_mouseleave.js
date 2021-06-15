$(function(){
    var count1=0;
    var count2=0;
    //.overOut에서 마우스가 벗어나면
    // count값을 1씩 증가하도록
    $(".overOut").mouseout(function(){
        count1++;
        $(this).children(".count").text(count1);
    })
    $(".enterLeave").mouseleave(function(){
        count2++;
        $(this).children(".count").text(count2);
    })
    
})