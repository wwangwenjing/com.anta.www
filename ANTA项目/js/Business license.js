$(function () {
    // 导航栏
    //获取nav-list，给里面的li添加鼠标移入事件
    $('.nav-list li:nth-child(-n+7)').on('mouseenter', function () {
        $('.nav-list li:nth-child(-n+7)').children().removeClass('active')
        //当鼠标到li上面时，就给当前小li添加类名
        $(this).children().addClass('active');
        //获取li的索引
        let index = $(this).index();
        //把li的索引给box里的内容，并让之对应显示，其他的隐藏
        $('.box .nav-list-content').eq(index).show().siblings().hide();
    })
    //移出就删除该类名
    $('.nav-list li:nth-child(-n+7)').on('mouseleave', function () {
        $('.box .nav-list-content').hide();
    })
    $('.box .nav-list-content').on('mouseenter', function () {
        $(this).show();

    })
    $('.box .nav-list-content').on('mouseleave', function () {
        $(this).hide()
        $('.nav-list li:nth-child(-n+7)').children().removeClass('active')

    });

})
//营业执照
$(function() {
//首先给左边的每个li绑定鼠标点击事件
$('.link-left li').on('click',function() {
//当鼠标点击当前li，让多应得当前li得内容显示
let index=$(this).index();
//应该获取li的索引，把索引给右侧对应的内容，并让对应的内容显示，其他的兄弟隐藏
$('.link-right').eq(index).show().siblings().hide();

// if(index==0) {
//     $('.link-right').eq(index).show().nextAll().hide();
// }
// if(index==1) {
//     $('.link-right-next').eq(index).show().next().hide();

// }
// if(index==2) {
//     $('.link-right-nexts').eq(index).show().prevAll().hide();
 
// }
})
})



//侧边栏
$(function() {
    $('.slideBar a:nth-child(1)').on('click',function() {
        $(document.documentElement).animate({
            scrollTop:'0px'
        })
    })
})
