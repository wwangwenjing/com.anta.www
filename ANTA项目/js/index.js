$(function() {
           // //获取nav-list，给里面的li添加鼠标移入事件
           $('.nav-list li:nth-child(-n+7)').on('mouseenter',function() {
            $(this).children().addClass('active')
        })
        $('.nav-list li:nth-child(-n+7)').on('mouseleave',function() {
            $(this).children().removeClass('active')
        })

})