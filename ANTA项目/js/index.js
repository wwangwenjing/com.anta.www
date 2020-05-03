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

    //轮播图
    let index = 0;
    // $('.Rotation-chart').hover(showArrow,hideArrow) 
    //     function showArrow() {
    //         $('.arrow').show();
    //     }
    //     function hideArrow() {
    //         $('.arrow').hide()

    // }
    //鼠标点击哪个小圆点上面，这个小圆点的背景色就是灰色
    $('.Rotation-chart ol li').on('click', overCircle)
    function overCircle() {
        //先给所有的小圆点删除类名
        $('.Rotation-chart ol li').removeClass('active')
        //再给当前的小圆点添加类名
        $(this).addClass('active')
        //获取小圆点的索引
        let circle = $(this).index();
        // console.log(circle);
        //让所有的大图淡出
        //在淡入淡出的同时，用stop清除没执行完的动画
        $('.Rotation-chart ul li').stop().fadeOut('100')
        $('.Rotation-chart ul li').eq(circle).stop().fadeIn('100')
        index = circle;

    }
    $('.arrow-right').on("click", clickRight)
    function clickRight() {
        index++;
        if (index == $(".Rotation-chart ul li").length) {
            index = 0
        }

        $(".Rotation-chart ul li").fadeOut("100")
        $(".Rotation-chart ul li").eq(index).fadeIn("100")
        // 对应的小圆点也跟着切换
        $(".Rotation-chart ol li").removeClass("active")
        $(".Rotation-chart ol li").eq(index).addClass('active')
    }
    $('.arrow-left').on("click", clickLeft)
    function clickLeft() {
        index--;
        if (index == -1) {
            index = $(".Rotation-chart ul li").length - 1
        }
        $(".Rotation-chart ul li").fadeOut("100")
        $(".Rotation-chart ul li").eq(index).fadeIn("100")
        // 对应的小圆点也跟着切换
        $(".Rotation-chart ol li").removeClass("active")
        $(".Rotation-chart ol li").eq(index).addClass('active')
    }
    let timer = setInterval(function () {
        // 定时触发  右箭头的点击事件
        $(".arrow-right").click();
    }, 2000)

    //滑动动画
    $('.star-list ul li').on('mouseenter', function () {
        //获取整个li的高度
        let liHeight = $(this).outerHeight()
        // 获取斜图的高度 
        let imgHeight = $(this).find('.star-img').outerHeight()
        // 给斜图添加自定义动画        
        $(this).find('.star-img').stop().animate({
            //需要移动的高度为：li的高度-斜图的高度
            top: liHeight - imgHeight,
            //往上移动的时候，显示出来
            opacity: 1
        }, 800)
        //其他图片往上移动的高度保持原样，并且透明
        $(this).siblings().find('.star-img').stop().animate({
            top: "100%",
            opacity: 0
        }, 500)
    })
    //当鼠标移出整个ul
    $('.star-list ul').on('mouseleave', function () {
        //就让斜图和原来一样
        $('.star-list ul li').find('.star-img').stop().animate({
            top: "100%",
            opacity: 0
        }, 500)
    })


})


$(function () {
    //给每个li添加鼠标移入事件
    $('.product-bottom-right>ul>.Oli-content').on('mouseenter', function () {
        //当鼠标移入进来，要让div撑大，撑大的同时，div里的轮播图要显示出来
        //字体要变成两行，隐藏的价钱也要显示

        $(this).children('.Location').stop().animate({
            top: -30,
            height: 415,
            zIndex: 2

        }, 100, function () {
            $(this).find('.lunbo').show();
            $(this).find('span').eq(1).show();
            $(this).find('a').eq(1).css({
                'white-space': 'normal',
            })
        })
        //要获取小图的路径
        $('.Location .lunbo li').on('mouseenter', function () {
            let imgsrc = $(this).children().attr('src');
            $(this).parents(".lunbo").prev().prev().find("img").attr({
                'src': imgsrc
            })
        })
    })
    $('.product-bottom-right>ul>.Oli-content').on('mouseleave', function () {
        $(this).children('.Location').stop().animate({
            top: 0,
            height: 345,
            zIndex: 1
        }, 100, function () {
            $(this).find('.lunbo').css('display', 'none');
            $(this).find('span').eq(1).hide();
            $(this).find('a').eq(1).css({
                'white-space': 'nowrap',
            })
        })



    })


})
// 中国boy
$(function () {
    //给每个li添加鼠标移入事件        
    $('.red-boy .boy-list').on('mouseenter', function () {
        //当鼠标移入进来，要让div撑大，撑大的同时，div里的轮播图要显示出来
        //字体要变成两行，隐藏的价钱也要显示    
        $(this).children('.order').stop().animate({
            top: -30,
            height: 415,
            zIndex: 2
        }, 100, function () {
            $(this).find('.order-lunbo').show();
            $(this).find('span').eq(1).show();
            $(this).find('a').eq(1).css({
                'white-space': 'normal',
            })
        })
    })
    //要获取小图的路径
    $('.order-lunbo li').on('mouseenter', function () {
        let imgsrc = $(this).children().attr('src');
        $(this).parents(".order-lunbo").prev().prev().find("img").attr({
            'src': imgsrc
        })
    })
// })

$('.red-boy>ul .boy-list').on('mouseleave', function () {

    $(this).children('.order').stop().animate({
        top: 0,
        height: 345,
        zIndex: 1
    }, 100, function () {
        $(this).find('.order-lunbo').css('display', 'none');
        $(this).find('span').eq(1).hide();
        $(this).find('a').eq(1).css({
            'white-space': 'nowrap',
        })
    })
})
})
// 精选系列
$(function () {
    //给每个a添加鼠标移入事件
    $('.choose-list a').on('mouseenter', function () {
        //当鼠标移入当前a，就让当前a高亮，其他a为原本色
        $(this).css('backgroundColor', 'transparent').siblings().css('backgroundColor', '')
    })

})
//微信显示图
$(function () {
    $('.we-content-bottom .iconfont6').on('mouseenter', function () {
        $('.we-content-bottom .small-box').show();
    })
    $('.we-content-bottom .iconfont6').on('mouseleave', function () {
        $('.we-content-bottom .small-box').hide();
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
