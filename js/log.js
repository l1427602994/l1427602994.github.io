

$("#tj").click(function(){
            var name = localStorage.getItem("name");
            if(name!=($("#name").val())){
               alert("登陆失败，请先注册")
               location.href="./log.html"
            }else{
               location.href="./index.html"
            }
})
