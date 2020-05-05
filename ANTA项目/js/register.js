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

//登录框
$(function () {
    //给‘手机注册’和邮箱注册添加点击事件
    $('.Register-switch span').on('click', function () {
        //获取span的索引
        let index = $(this).index();
        //判断索引如果是‘邮箱注册’，那么就让下方的请输入手机号码注册改为邮箱地址注册
        //那么就给第二个span添加current类名，给第一个删除类名
        $('.Register-switch span').eq(index).addClass('current').siblings().removeClass('current');
        $(this).find('a').show().parent().siblings().find('a').hide();
        //判断索引，切换part-one和part-two
        if (index == 0) {
            $('.part-one').show().next().hide();
            $('.Mobile-registration').css({
                'height': 500
            })
            $('main').css({
                'height': 623
            })

        } else {
            $('.part-two').show().prev().hide();
            $('.Mobile-registration').css({
                'height': 576
            })
            $('main').css({
                'height': 700
            })

        }
    })

    //给part-one确认按钮添加鼠标点击事件
    $('.part-one .confirm').on('click', function () {
        //当点之后，要获取part-one里面输入框的值
        let $phone = $('.part-one>.Switch-content input:eq(0)').val();
        //获取验证码的位数
        let $picture = $('.picture>input').val();
        //并判断输入框的值是否都为空
        if ($phone.trim().length == 0) {
            //如果为空 就给input添加红色边框，并让输入框下方的提示内容显示
            $('.part-one>.Switch-content>input:eq(0)').css('borderColor', 'red')
            $('.part-one .home-logo-middle').show()
        }
        //判断输入框的值是否小于11位或者是否大于11
        if ($phone.trim().length < 11 || $phone.trim().length > 11) {
            //如果为空 就给input添加红色边框，并让输入框下方的提示内容显示
            $('.part-one>.Switch-content input:eq(0)').css('borderColor', 'red')
            $('.part-one .home-logo-middle').show();
            $('.part-one .home-logo-middle span').html('请正确输入注册手机号码')
        }
        //判断输入框里的值是否等于11位
        if ($phone.trim().length == 11) {
            $('.part-one .picture>input').css('borderColor', 'red')
            $('.part-one .home-logo-middle').show();
            $('.part-one .home-logo-middle>span').html('请输入图片验证码')
        }
        //判断输入框里的值是否等于11位并且验证码里的值是否等于4位
        if ($phone.trim().length == 11 && $picture.trim().length == 4) {
            $('.part-one .home-logo-middle').show();
            $('.part-one .home-logo-middle span').html('请先阅读并接受隐私政策')
            $('.part-one .picture>input').css('border-color', '')
        }
        if ($phone.trim().length == 11 && $picture.trim().length != 4) {
            $('.part-one .home-logo-middle').show();
            $('.part-one .home-logo-middle span').html('验证码不正确')
            $('.part-one .picture>input').css('border-color', 'red')
        }

    })
    //给part-one里的输入框添加获取焦点事件，当获取到焦点 就让所有所有添加的样式隐藏
    $('.part-one input').on('focus', function () {
        $('.part-one>.Switch-content input:eq(0)').css('borderColor', '')
        $('.part-one .home-logo-middle').hide();

    })

    let index = 0;
    //给验证码添加点击事件
    $('.picture li').on('click', function () {
        let $index = $(this).index()
        if ($index == $(this).parent().children().length - 1) {
            $index = -1
        }
        $(this).hide()
        $('.picture li').eq($index + 1).show()


    })

    // 
    //给part-two确认按钮添加鼠标点击事件
    $('.part-two .confirm').on('click', function () {
        //当点之后，要获取part-one里面输入框的值
        let $phoneValue = $('.part-two>.Switch-content>input:eq(0)').val();
        let $loginValue = $('.part-two>.Switch-content>input:eq(1)').val();
        let $pictureValue = $('.part-two .picture>input').val();

        //并判断输入框的值是否都为空
        if ($phoneValue.trim().length == 0 && $loginValue.trim().length == 0) {
            //如果为空 就给input添加红色边框，并让输入框下方的提示内容显示
            $('.part-two>.Switch-content>input:eq(0)').css('borderColor', 'red')
            $('.part-two .home-logo-middle').show()
        }


        function checkEmail(strEmail) {
            var emailReg = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
            if (emailReg.test(strEmail)) {
                // alert('正确');
                return true;

            } else {
                // alert('错误');
                return false;
            }
        }
        var emailaddress = '3206796951@qq.com';
        console.log(checkEmail(emailaddress));
        if (checkEmail($phoneValue)) {
            $('.part-two .picture input:eq(0)').css('borderColor', 'red')
            $('.part-two .home-logo-middle').show();
            $('.part-two .home-logo-middle span').html('请输入图片验证码')

        } else {
            $('.part-two .Switch-content input:eq(0)').css('borderColor', 'red')
            $('.part-two .home-logo-middle').show();
            $('.part-two .home-logo-middle span').html('请正确输入注册邮箱地址')
            $('.part-two .picture>input').css('borderColor', '')
        }
        if (checkEmail($phoneValue) && $pictureValue.trim().length < 4) {
            //如果为空 就给input添加红色边框，并让输入框下方的提示内容显示
            $('.part-two .home-logo-middle').show();
            $('.part-two .home-logo-middle span').html('验证码不正确')
            $('.part-two .picture>input').css('borderColor', 'red')
        }
        if (checkEmail($phoneValue) && $pictureValue.trim().length == 4) {
            //如果为空 就给input添加红色边框，并让输入框下方的提示内容显示
            $('.part-two .home-logo-middle').show();
            $('.part-two .home-logo-middle span').html('请先阅读并接受隐私政策')
            $('.part-two .picture>input').css('borderColor', '')

        }

    })
    //给part-one里的输入框添加获取焦点事件，当获取到焦点 就让所有所有添加的样式隐藏
    $('.part-two input').on('focus', function () {
        $('.part-two>.Switch-content input:eq(0)').css('borderColor', '')
        $('.part-two .home-logo-middle').hide();

    })
    // let index = 0;
    //给验证码添加点击事件
    $('.part-two .picture li').on('click', function () {
        let $index = $(this).index()
        if ($index == $(this).parent().children().length - 1) {
            $index = -1
        }
        $(this).hide()
        $('.part-two .picture li').eq($index + 1).show()


    })

    //给隐私政策添加鼠标点击事件
    $('.part-one .checkbox i').on('click', function () {
        $('.mask').show();
        $('.policy-content-body').show();
    })
    $('.part-two .checkbox i').on('click', function () {
        $('.mask').show();
        $('.policy-content-body').show();
    })

    //给同意和关闭按钮添加点击事件
    $('.policy-content-bottom button').on('click', function () {
        $('.mask').hide();
        $('.policy-content-body').hide();

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
