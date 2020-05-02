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
