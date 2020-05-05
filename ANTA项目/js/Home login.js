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
//点击立即登录时，要获取输入框的值，如果只输入了第一个框没输入第二个框，第二个框的边框颜色就是红色的，
//下方显示请输入密码，密码前面有一个红色叹号
//如果密码长度低于8个数字，就显示 红叹号，和红边框，并显示用户名或密码不正确
//如果第一个输入框空着，就显示请输入帐号
// 如果输入3次不正确就显示请输入图片验证码
//登录框
$(function () {
    //点击立即登录，要获取上面的input的内容
    $('.home-logo-top>a').on('click', function () {
        var $number = $('.home-logo-top input:nth-child(1)').val();
        var $password = $('.home-logo-top input:nth-child(2)').val();
        //判断两个输入框的内容长度是否小于等于0
        //如果都没有内容，就显示请输入帐号，第一个输入框添加红色边框
        if ($number.trim().length == 0 && $password.trim().length == 0) {
            $('.home-logo-top .home-logo-middle').show();
            $('.home-logo-top>input:nth-child(1)').css('border-color', 'red')
        }
        //如果输入了邮箱没有输入密码，就显示请输入密码，第二个input添加红色边框
        if ($number.trim().length == 0 && $password.trim().length != 0) {
            $('.home-logo-top .home-logo-middle').show();
            $('.home-logo-top .home-logo-middle span').html('请输入帐号')
            $('.home-logo-top>input:nth-child(1)').css('border-color', 'red')

        }
        //如果输入了密码没有输入帐号，就显示请输入帐号，第一个input添加红色边框
        if ($number.trim().length != 0 && $password.trim().length == 0) {
            $('.home-logo-top .home-logo-middle').show();
            $('.home-logo-top .home-logo-middle span').html('请输入密码')
            $('.home-logo-top input:nth-child(2)').css('border-color', 'red')
        }
        if ($number.trim().length !== 0 && $password.trim().length !== 0) {
            $('.home-logo-top .home-logo-middle').show();
            $('.login-switch>input:nth-child(1)').css('border-color', 'red')
        }

    })
    $('.home-logo-top input').on('focus', function () {
        $('.home-logo-top .home-logo-middle').hide();
        $('.home-logo-top .home-logo-middle span').html('请输入图片验证码')
        $('.home-logo-top input').css('border-color', '')
    })

    let index = 0;
    //给验证码添加点击事件
    $('.login-switch li').on('click', function () {
        let $index = $(this).index()
        if ($index == $(this).parent().children().length - 1) {
            $index = -1
        }
        $(this).hide()
        $('.login-switch li').eq($index + 1).show()


    })
})
$(function() {
    $('.home-logo-bottom li').on('mouseenter',function() {
        //当鼠标移入，第一张图片隐藏，第二张图片显示
        $(this).children('img:eq(0)').hide().siblings().show();
    })
    $('.home-logo-bottom li').on('mouseleave',function() {
        //鼠标离开，第一张图片显示，第二张图片隐藏
        $(this).children('img:eq(0)').show().siblings().hide();
    })

})

//侧边栏
$(function () {
    $('.slideBar a:nth-child(1)').on('click', function () {
        $(document.documentElement).animate({
            scrollTop: '0px'
        })
    })
})
