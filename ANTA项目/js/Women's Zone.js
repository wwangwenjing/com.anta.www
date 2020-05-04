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

    })
//主题部分
    /*
    
    
    
    * */
    //给每个Oli添加鼠标移入事件
    $('.Season-selection-contents .Oli').on('mouseenter', function () {
        $(this).children('.Oli-content').stop().animate({
            //当鼠标移入，让div高度边长
            top: -30,
            height: 415,
            zIndex: 2
        }, 100, function () {
            //让字体不在省略
            $(this).find('a').eq(1).css({
                'white-space': 'normal'
            });
            //让轮播图显示
            $(this).find('.lunbo').show();
            //让隐藏的价格显示
            $(this).find('i').show();
        })
    })
    $('.Season-selection-contents .Oli').on('mouseleave', function () {
        $(this).children('.Oli-content').stop().animate({
            top: 0,
            height: 310,
            zIndex: 0
        }, 100, function () {
            $(this).find('a').eq(1).css({
                'white-space': 'nowrap'
            });
            $(this).find('.lunbo').hide();
            $(this).find('i').hide();
        })
    })

    /*
 
 
 
* */
        //给每个li绑定点击事件
    $('.Oli-content .lunbo li').on('mouseenter', function () {
        //获取轮播图内小图的路径
        let imgsrc = $(this).children().attr('src');
        // console.log(imgsrc);
        //再获取大图的路径，把小图的路径给当前大图
        //找到当前li的父级元素lunbo的上一个兄弟元素再上一个兄弟元素里面找的子元素图片并获取图片的路径
        $(this).parents('.lunbo').prev().prev().find('img').attr({
            'src': imgsrc
        })
    })
    $('.Oli-content .lunbo li').on('mouseleave', function () {
        //获取轮播图内小图的路径
        let imgsrc = $(this).children().attr('src');
        console.log(imgsrc);
        //再获取大图的路径，把小图的路径给当前大图
        //找到当前li的父级元素lunbo的上一个兄弟元素再上一个兄弟元素里面找的子元素图片并获取图片的路径
        $().parents('.lunbo').prev().prev().find('img').attr({
            'src': imgsrc,
        })
    })

//热销推荐
    //给每个Oli添加鼠标移入事件
    $('.Best-Sellers-right .Oli').on('mouseenter', function () {
        $(this).children('.Oli-content').stop().animate({
            //当鼠标移入，让div高度边长
            top: -30,
            height: 415,
            zIndex: 2
        }, 100, function () {
            //让字体不在省略
            $(this).find('a').eq(1).css({
                'white-space': 'normal'
            });
            //让轮播图显示
            $(this).find('.lunbo').show();
            //让隐藏的价格显示
            $(this).find('i').show();
        })
    })
    $('.Best-Sellers-right .Oli').on('mouseleave', function () {
        $(this).children('.Oli-content').stop().animate({
            top: 0,
            height: 310,
            zIndex: 0
        }, 100, function () {
            $(this).find('a').eq(1).css({
                'white-space': 'nowrap'
            });
            $(this).find('.lunbo').hide();
            $(this).find('i').hide();
        })
    })

        //给每个li绑定点击事件
    $('.Oli-content .lunbo li').on('mouseenter', function () {
        //获取轮播图内小图的路径
        let imgsrc = $(this).children().attr('src');
        // console.log(imgsrc);
        //再获取大图的路径，把小图的路径给当前大图
        //找到当前li的父级元素lunbo的上一个兄弟元素再上一个兄弟元素里面找的子元素图片并获取图片的路径
        $(this).parents('.lunbo').prev().prev().find('img').attr({
            'src': imgsrc
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
