$(function () {
    //给字体图标1添加鼠标输入事件
    $('.iconfont1').on('mouseenter', function () {
        //鼠标移入，让箭头反转
        //隐藏信息显示
        $('.contents div').show()
    })
    $('.iconfont1').on('mouseleave', function () {
        //鼠标移入，让箭头反转
        //隐藏信息显示
        $('.contents div').hide()
    })
})
$(function () {
    //给所有li添加鼠标点击事件
    $('.country-information li').on('click', function () {
        //当鼠标点击让当前li的子元素span显示，并让当前子元素的父元素的兄弟元素的子元素的span隐藏
        $(this).children('span').css('opacity', 1).parent().siblings().children('span').css('opacity', 0)
        //当鼠标点击当前li，就让当前li的字体加粗其他的反之
        $(this).addClass('bold').siblings().removeClass('bold')
    })

})
$(function() {
    //给country-list里面的每个li添加鼠标移入事件
    $('.country-list li img').on('mouseenter',function() {
        //当鼠标移入就让当前图片的背景色为黄色，其他的反之
        $(this).css({
            'backgroundColor':'#d5b560',
            'opacity':'0.1'
        })
        
    })
})