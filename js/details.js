 
var djs=document.getElementById('day')
var xs=document.getElementById('xs')
var fz = document.getElementById('fz')
var mz=document.getElementById('mz')
var timer=setInterval(function(){
    var time1 = new Date().getTime()
    var time2 = new Date(2021, 0, 10).getTime()
    var time3 = time2 - time1
    //日
    day=parseInt(time3/(1000*60*60*24))
    djs.innerHTML = day + "天"
    //小时
    hour=parseInt(time3/(1000*60*60)%24)
    if(hour>=10){
        xs.innerHTML=hour
    }else{
        xs.innerHTML = "0" + hour
    }
    // //分钟
    fen = parseInt((time3/(1000*60)%60))
    if(fen>=10){
        fz.innerHTML=fen
    }else{
        fz.innerHTML="0"+fen
    }
    // //秒钟
    miao = parseInt(time3/1000 % 60)

    if (miao >= 10) {
        mz.innerHTML = miao
    } else {
        mz.innerHTML = "0" + miao
    }
},1000)


//获取地址栏
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if (r != null) return decodeURIComponent(r[2]) ; return null;
}
var id = GetQueryString("id")
var img = GetQueryString("img")
var info = GetQueryString("info")
var price = GetQueryString("price")
var num=1
$(".sp_top").html(info)
$(".sp_left>a").css("background","url("+img+")")
$(".sp_price>span").html(price)
$(".ren").html(id)


//点击加入购物车
function getCart() {
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr) {
    localStorage.setItem('cart', JSON.stringify(arr))
}

$("#add").click(function(){
    var newspinfos={
        cartid:id,
        cartimg: img,
        cartinfo:info,
        cartprice:price,
        cartnum:num,
    }
   var spinfos=getCart()
   var idd=""
   $.each(spinfos,function(index,item){
        idd=item.cartid
   })
  console.log(idd);
   if(idd==newspinfos.cartid){
       var list3=getCart()
       $.each(list3, function (index, item) {
        item.cartnum=item.cartnum+1
       })
       setCart(list3)
       alert("添加成功，快去购物车中查看吧")
   }else{
       spinfos.push(newspinfos)
       setCart(spinfos)
       alert("添加成功，快去购物车中查看吧")
   }
})


$("#cart").click(function(){
    var name1 = localStorage.getItem("name")
    console.log(name1);
    if(name1!=null){
        location.href="./cart.html"
    }else{
        alert("你还未登录请登录")
        location.href="./log.html"
    }
})
