


$("#tj").click(function(){
    $.ajax({
            url:"./api/register.json",
            type:"get",
            dataType:"json",
            success:function(res){
                if(res.code===1){
                    localStorage.setItem("name", $('#name').val());
                    alert("注册成功")
                    location.href = "./log.html"
                }
            }
        })
})