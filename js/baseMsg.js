// 点击选择性别
$("#choose1").click(function(){
    $(".tan2").eq(0).removeClass("none");
    $(".sex").click(function(){
        var text = $(this).attr("data-text");
            console.log(text);
            $(".tan2").eq(0).addClass("none");
            $("#choose1").text(text);
    })
})



// 点击选择婚姻状况
$("#choose2").click(function(){
    $(".tan1").eq(0).removeClass("none");
    $(".marry").click(function(){
        var text = $(this).attr("data-text");
            console.log(text);
            $(".tan1").eq(0).addClass("none");
            $("#choose2").text(text);
    })
})


// 点击选择学历

$("#choose3").click(function(){
    $(".tan").eq(0).removeClass("none");
        $(".edu").click(function(){
            var text = $(this).attr("data-text");
            console.log(text);
            $(".tan").eq(0).addClass("none");
            $("#choose3").text(text);
        })
        
    
})

// 点击下一步，跳转工作信息页面

$(".btn").eq(0).click(function(){
    window.location.href="./workMsg.html";
})