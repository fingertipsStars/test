// 点击选择职业
$("#choose1").click(function(){
    $(".tan").eq(0).removeClass("none");
    $(".work").click(function(){
        var text = $(this).attr("data-text");
            console.log(text);
            $(".tan").eq(0).addClass("none");
            $("#choose1").text(text);
    })
})
