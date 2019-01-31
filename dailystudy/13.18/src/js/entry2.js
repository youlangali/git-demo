// 方法使用的入口
pageEngine.init('.wrapper',['red','orange','blue'])
    .addSection('oneSection')
        .addComponent({
                //  bese是为了 看你  使用哪个component,因为你可能不止要创建一个定制化的div，
                //你可能创建定制化的p或者其他的，其他的你可以用type：super或者其他任意的来定义
                type: 'base',
                className: 'duyi',
                width: 400,
                height: 200,
                text:'绯闻红ifWOEFOja按键我没法，这狗额好啊二级讴歌红哦给我个围殴会【为剧哦纠结',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/dialog.jpg)',
                    backgroundSize: '100% 100%',
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px',
                    },
                animateIn: {
                    opacity: 1,
                    top: 150
                },
                animateOut: {
                    opacity: 0,
                    top: 0,
                },
                delay: 1000,
                event: {
                    click: function(){
                        alert($(this).text())
                    },
                    mouseenter: function(){
        
                    }
        
                }
        })
        .addComponent({
            //  bese是为了 看你  使用哪个component,因为你可能不止要创建一个定制化的div，
            //你可能创建定制化的p或者其他的，其他的你可以用type：super或者其他任意的来定义
            type: 'base',
            className: 'duyi',
            width: 200,
            height: 100,
            text:'绯闻红ifWOEFOja按键我没法，这狗额好啊二级讴歌红哦给我个围殴会【为剧哦纠结',
            // center: true,
            css: {
                position: 'absolute',
                opacity: 0,
                top: 0,
                backgroundImage: 'url(./src/img/dialog.jpg)',
                backgroundSize: '100% 100%',
                padding: '10px 15px 10px 15px',
                textAlign: 'justify',
                fontSize: '18px',
                fontWeight: '900',
                lineHeight: '25px',
                },
            animateIn: {
                opacity: 1,
                left: 650
            },
            animateOut: {
                opacity: 0,
                left: 0,
            },
            delay: 1000,
            event: {
                click: function(){
                    alert($(this).text())
                },
                mouseenter: function(){
    
                }
    
            }
    })
    .addSection('twoSection')
        .addComponent({
            //  bese是为了 看你  使用哪个component,因为你可能不止要创建一个定制化的div，
            //你可能创建定制化的p或者其他的，其他的你可以用type：super或者其他任意的来定义
            type: 'base',
            className: 'duyi',
            width: 400,
            height: 200,
            text:'绯闻红ifWOEFOja按键我没法，这狗额好啊二级讴歌红哦给我个围殴会【为剧哦纠结',
            center: true,
            css: {
                position: 'absolute',
                opacity: 0,
                top: 0,
                backgroundImage: 'url(./src/img/dialog.jpg)',
                backgroundSize: '100% 100%',
                padding: '10px 15px 10px 15px',
                textAlign: 'justify',
                fontSize: '18px',
                fontWeight: '900',
                lineHeight: '25px',
                },
            animateIn: {
                opacity: 1,
                top: 150
            },
            animateOut: {
                opacity: 0,
                top: 0,
            },
            delay: 1000,
            event: {
                click: function(){
                    alert($(this).text())
                },
                mouseenter: function(){

                }

            }
            })
    .addSection('threeSection')
        .addSlide('3-slide1')
            .addComponent({
                //  bese是为了 看你  使用哪个component,因为你可能不止要创建一个定制化的div，
                //你可能创建定制化的p或者其他的，其他的你可以用type：super或者其他任意的来定义
                type: 'base',
                className: 'duyi',
                width: 400,
                height: 200,
                text:'绯闻红ifWOEFOja按键我没法，这狗额好啊二级讴歌红哦给我个围殴会【为剧哦纠结',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/dialog.jpg)',
                    backgroundSize: '100% 100%',
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px',
                    },
                animateIn: {
                    opacity: 1,
                    top: 150
                },
                animateOut: {
                    opacity: 0,
                    top: 0,
                },
                delay: 1000,
                event: {
                    click: function(){
                        alert($(this).text())
                    },
                    mouseenter: function(){
        
                    }
        
                }
            })
        .addSlide('3-slide2')
            .addComponent({
                //  bese是为了 看你  使用哪个component,因为你可能不止要创建一个定制化的div，
                //你可能创建定制化的p或者其他的，其他的你可以用type：super或者其他任意的来定义
                type: 'base',
                className: 'duyi',
                width: 400,
                height: 200,
                text:'绯闻红ifWOEFOja按键我没法，这狗额好啊二级讴歌红哦给我个围殴会【为剧哦纠结',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/dialog.jpg)',
                    backgroundSize: '100% 100%',
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px',
                    },
                animateIn: {
                    opacity: 1,
                    top: 150
                },
                animateOut: {
                    opacity: 0,
                    top: 0,
                },
                delay: 1000,
                event: {
                    click: function(){
                        alert($(this).text())
                    },
                    mouseenter: function(){
        
                    }
        
                }
            })
        .addSlide('3-slide3')
            .addComponent({
            //  bese是为了 看你  使用哪个component,因为你可能不止要创建一个定制化的div，
            //你可能创建定制化的p或者其他的，其他的你可以用type：super或者其他任意的来定义
            type: 'base',
            className: 'duyi',
            width: 400,
            height: 200,
            text:'绯闻红ifWOEFOja按键我没法，这狗额好啊二级讴歌红哦给我个围殴会【为剧哦纠结',
            center: true,
            css: {
                position: 'absolute',
                opacity: 0,
                top: 0,
                backgroundImage: 'url(./src/img/dialog.jpg)',
                backgroundSize: '100% 100%',
                padding: '10px 15px 10px 15px',
                textAlign: 'justify',
                fontSize: '18px',
                fontWeight: '900',
                lineHeight: '25px',
                },
            animateIn: {
                opacity: 1,
                top: 150
            },
            animateOut: {
                opacity: 0,
                top: 0,
            },
            delay: 1000,
            event: {
                click: function(){
                    alert($(this).text())
                },
                mouseenter: function(){
    
                }
    
            }
            })
            .load()

