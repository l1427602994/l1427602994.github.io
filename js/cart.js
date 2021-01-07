function getCart() {
    var list = localStorage.getItem('cart') || "[]"; 
    return JSON.parse(list);
}
function setCart(arr) {
    localStorage.setItem('cart', JSON.stringify(arr))
}

showlist()
function showlist(){
        var list1=getCart()
       if(list1.length<=0){
           $(".cart_kon").css("display","block")
           $(".cart").css("display", "none")
           return
       }
    $(".top_right").css("background", "url(http://f0.jmstatic.com/static_cart/dist/20191009_1/images/order_path.png) 0px -50px")
       $("tbody").empty()
       $(".cart").css("display","block")
    var array = new Array() //记录小计的数组
    var array5=new Array() //记录商品数量的数组
       $.each(list1,function(index,item){
          
           var xj1 = item.cartnum * item.cartprice //记录小计
       $("tbody").append(`<tr>
                    <td>
                       <div class="idd">${item.cartid}</div>
                    </td>
                    <td>
                        <div class="sp clearfix">
                            <div class="sp_left">
                                <img src="${item.cartimg}" alt="">
                            </div>
                            <div class="sp_right">
                             <a href="#">${item.cartinfo}</a>
                            </div>
                        </div>
                    </td>
                    <td><div class="price">${item.cartprice}</div></td>
                    <td>
                        <div class="num">
                            <span class="cut">-</span>
                            <span class="num2">${item.cartnum}</span>
                            <span class="add">+</span>
                        </div>
                    </td>
                    <td>
                        <div class="xj">
                           ${xj1}
                        </div>
                    </td>
                    <td>
                        <div class="del">
                            <span></span>
                        </div>
                    </td>
                   </tr>
          `)
         
           var sum = item.cartnum   //记录数量
           array5.push(sum)
           array.push(xj1)
           var zonji = eval(array.join("+"))  //计算总计
           $(".heji").html(zonji)
           var aaa = eval(array5.join("+"))  //计算总数量
           $(".sum>span").html(aaa)
       })
 
  
}
//点击增加商品数量
$("tbody").on("click",".add",function(){
   that=$(this)
    var spid = that.parent().parent().parent().children().eq(0).children(0).html()
    var list2=getCart()
    $.each(list2,function(index,item){
        if(item.cartid==spid){
            item.cartnum = item.cartnum+1
        }
        setCart(list2)
        showlist()
    })
})
$("tbody").on("click", ".cut", function () {
    that = $(this)
    var spid = that.parent().parent().parent().children().eq(0).children(0).html()
    var list2 = getCart()
    var numb=that.parent().children().eq(1).html()
    if(numb>1){
        $.each(list2, function (index, item) {
            if (item.cartid == spid) {
                item.cartnum = item.cartnum - 1
            }
            setCart(list2)
            showlist()
        })
    }
})

  //点击删除
$("tbody").on("click",".del>span",function(){
    console.log(this);
    that=$(this)
    that.parent().parent().parent().remove()
    var id3 = that.parent().parent().parent().children().eq(0).children().eq(0).html()
    var lista=getCart()
    $.each(lista,function(index,item){
        if(item.cartid==id3){
            lista.splice(index,1)
        }
        setCart(lista)
    })
    showlist()
})
