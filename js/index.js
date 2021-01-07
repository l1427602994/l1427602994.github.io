/* 头部列表 */
$(".wdjm").mouseover(function () {
  $(".wdjm>ol").stop().slideDown(200, "linear")
})
$(".more").mouseover(function () {
  $(".more>ul").stop().slideDown(200, "linear")
})
$(".wdjm").mouseleave(function () {
  $(".wdjm>ol").stop().slideUp(200, "linear")
})
$(".more").mouseleave(function () {
  $(".more>ul").stop().slideUp(200, "linear")
})

/* 购物车 */
$("#cart").click(function(){
  var name = localStorage.getItem("name");
  if(name!=null){
    location.href="./cart.html"
  }else{
    alert("你还未登录，请登录")
  }
})
//登陆成功
showName()
  function showName(){
    var name = localStorage.getItem("name");
    if (name != null) {
      $('.dl1').html(`尊敬的${name}用户`)
    }else{
      $('.dl1').html("请登录")
    }
  }


/* 导航栏二级 */
$(".mzsc").mouseover(function () {
  $(".erji").stop().slideDown(200, "linear")
})
$(".mzsc").mouseleave(function () {
  $(".erji").stop().slideUp(200, "linear")
})

/* 轮播图 */
var mySwiper = new Swiper('.swiper-container', {
  // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  speed: 1500,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 如果需要滚动条
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
})

/* 商品 */

async function getMarketinfo() {
  var data = await $.ajax({
    url: "./api/info.json",
    type: 'get',
    dataType: "json"
  })
  console.log(data);
  $.each(data, function (index, item) {
    $(`<li id="qqq">
                <span id="spd_id">${item.id}</span>
                    <a href="./details.html?id=${item.id}&img=${item.img}&info=${item.info}&price=${item.infoprice}" >
                        <img src="${item.img}">
                        <div id="cart_add">加入购物车</div>
                        <div class="market_xx">海外直采 海外价格 闪电发货</div>
                    </a>
                    <p class="infotion"><a href="#">${item.info}</a></p>
                    <div class="infoprice"><i class="iconfont icon-qian"></i>${item.infoprice}</div>
                </li>
   `).appendTo($(".market_contoner_ul"))
  })
}
getMarketinfo()
 




