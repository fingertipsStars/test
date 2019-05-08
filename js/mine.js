// 点击头像登陆
$(".avatar").click(function(){
   $.ajax({
       type:"post",
       url:url,
       success:function(res){

       },
       error:function(){
           console.log("login 失败")
       }
   })
})


// 点击快速 还款 

$(".fastwaybtn").click(function(){
    window.location.href=""
})


// 点击申请延期

$(".delaybtn").click(function(){
    window.location.href=""
})

// 点击推出登陆

$(".btn").click(function(){
    window.location.href=""
})
