$.fn.extend({
    //   控制翻页
    myFullPage: function(config){
        var colorsArray = config.colorsArray ;
        var $w = $(this);
        var $section = $w.find('.section');
        var $clientWidth = $(window).outerWidth();
        var $clientHeight = $(window).outerHeight();
        var curIndex = 0;
        var lock = true;
        var commonStyle = {
            width: '100%',
            height: '100%',
        };
        $('html')
            .add('body')
                .css({position: 'relative',margin: 0,overflow: 'hidden' })
                    .add($w)
                        .add($section)
                            .css(commonStyle);
        $w.css({position: 'absolute',left: 0,top: 0})
            .find('.section')
                .each(function(index,ele){
                    // console.log(colorsArray[index]);
                    $(ele).css({backgroundColor: colorsArray[index],position: 'relative',}).find('.slide').css({float: 'left',width: $clientWidth,height: $clientHeight,position: 'relative'}).wrapAll('<div class="slideWrap"></div>') 
                    // console.log(ele);
                })
        $section.find('.slideWrap').each(function(index,ele){$(ele).css({position: 'absolute',left: 0,top: 0, width:$(ele).find('.slide').size()*$clientWidth,height: $clientHeight, })  })




       
        // left 37    top 38    right 39    bottom 40
        //  类名初始化
        $section.eq(0)
            .addClass('active')
                .end()
                    .find('.slideWrap')
                        .css({position: 'absolute',left: 0,top: 0})
                            .each(function(index,ele){
                                $(ele).find('.slide').eq(0).addClass('innerActive')
                            })
        $(document).on('keydown', function (e) {
            // 垂直移动
            if (lock) {
                if (e.which == 38 || e.which == 40) {
                    lock = false;
                    //  按上
                    var direction = null;
                    var newTop = $w.offset().top;
                    if (e.which == 38 && curIndex != 0) {
                        //  offset 表示的离文档的距离
                        direction = 'top',
                        config.onLeave(curIndex,direction)
                        newTop += $clientHeight;
                        curIndex--;

                    } else if (e.which == 40 && curIndex != $section.size() - 1){//  按下
                        direction = 'bottom';
                        config.onLeave(curIndex,direction)
                        newTop -= $clientHeight;
                        curIndex++;
                    }
                    $w.animate({
                        top: newTop,
                    }, 1500, 'swing', function () {
                        lock = true;
                        $section.eq(curIndex).addClass('active');
                        // direction == 'top' ? $section.eq(curIndex + 1).removeClass('active') : $section.eq(curIndex - 1).removeClass('active');
                        $section.eq(direction == 'top' ? curIndex + 1 : curIndex - 1).removeClass('active');
                        config.afterLoad(curIndex,direction)
                    })
                }
            }
            //  水平移动


            if (lock) {
                lock = false;
                var $sw = $('.active').find('.slideWrap');
                // console.log($sw)
                var newLeft = $sw.offset().left;
                var curDom = $sw.find('.innerActive');
                var direction = null;
                if (e.which == 37 || e.which == 39) {
                    //  往左
                    if (e.which == 37 && curDom.index() != 0) {
                        console.log(curDom.index())
                        newLeft += $clientWidth;
                        direction = 'left';
                    } else if (e.which == 39 && curDom.index() != $sw.find('.slide').size() - 1) {//  不限制就会使得index往下走，得到-1
                        console.log(curDom.index(),$sw.find('.slide').size() - 1)
                        newLeft -= $clientWidth;
                        direction = 'right';
                    }
                    $sw.animate({
                        left: newLeft,
                    }, 200, 'swing', function () {
                        lock = true;
                        direction != null ? curDom.removeClass('innerActive') : '';
                        direction == 'left' ? curDom.prev().addClass('innerActive') : curDom.next().addClass('innerActive')
                    })
                }
            }

        })

        }
})