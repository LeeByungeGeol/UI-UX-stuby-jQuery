$(function() {

    // 1번버튼
    // $(".btn>li:eq(0)").click(function() {
    //     var $title = $(".btn>li:eq(0)").find("img").attr("alt");
    //     var $src = $(".btn>li:eq(0)").find("img").attr("title");
    //     $("h1").text($title);
    //     $(".bigImg>img").attr({
    //         "src": $src,
    //         "alt": $title
    //     })
    // })

    // // .btn>li두번째를 클릭하면
    // // .btn>li두번째에서 자손으로 있는 img를 찾은다음
    // // 그 이미지의 alt,title속성값을 받아와서
    // // alt는 h1의 내용과 .bigImg>img의 alt속성으로 사용하고
    // // title은 .bigImg>img src 속성으로 사용한다.
    // $(".btn>li:eq(1)").click(function() {
    //         // alt정보를 저장할 변수
    //         var $title = $(".btn>li:eq(1)").find("img").attr("alt");
    //         console.log($title);
    //         // title 속성값을 저장할 변수
    //         var $src = $(".btn>li:eq(1)").find("img").attr("title");
    //         $("h1").text($title);
    //         $(".bigImg>img").attr({
    //             "src": $src,
    //             "alt": $title
    //         })

    //     })
    //     // 3번버튼
    // $(".btn>li:eq(2)").click(function() {
    //     var $title = $(".btn>li:eq(2)").find("img").attr("alt");
    //     var $src = $(".btn>li:eq(2)").find("img").attr("title");
    //     $("h1").text($title);
    //     $(".bigImg>img").attr({
    //         "src": $src,
    //         "alt": $title
    //     })
    // })

    $(".btn>li").click(function() {
        var $title = $(this).find("img").attr("alt");
        var $src = $(this).find("img").attr("title");
        $("h1").text($title);
        $(".bigImg>img").attr({
            "src": $src,
            "alt": $title
        })
    })
})