// 方法使用的入口
pageEngine.init('.wrapper',['black','black','black'])
    .addSection('section_one')
        .addComponent({
            type: 'base',
            className: 'bannerImg',
            width: '80%',
            height: '100%',
            css: {
                position: 'absolute',
                top: 0,
                right: 0,
                opacity: 0,
                backgroundImage: 'url(./src/img/banner.jpg)',
                backgroundSize: '100% 100%',
            },
            animateIn: {
                opacity: 1,
                right: 70
            },
            animateOut: {
                opacity: 0,
                right: 0
            },
            delay: 500,

        })
        .addComponent({
            type: 'base',
            className: 'bannerFont1',
            height: 200,
            // text: '追求极致音质',
            // html: '<span style="color: orange,">追求<span>',
            css: {
                position: 'absolute',
                top: '45%',
                left: 0,
                opacity: 0,
                color: 'white',
                // fontSize: '33px',
            },
            animateIn: {
                opacity: 1,
                left: '22%',
            },
            animateOut: {
                opacity: 0,
                right: 0
            },
            delay: 1000,
        })
    .addSection('section_two')
        .addSlide('2-slide-1')
        .addComponent({
            type: 'base',
            className: 'product1Title',
            css: {
                position: 'absolute',
                opacity: 0,
                top: 50,
                left: -20,
                },
            animateIn: {
                opacity: 1,
                left: 0,
            },
            animateOut: {
                opacity: 0,
                left: -20,
            }
        })
            .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product1',
                css: {
                    position: 'absolute',
                    left: 0,
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products1.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                }

            })
            .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product1',
                css: {
                    position: 'absolute',
                    left: '25%',
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products2.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                },
                delay: 500,
            })
            .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product1',
                css: {
                    position: 'absolute',
                    left: '50%',
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products3.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                },
                delay: 1000,
            })
            .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product1',
                css: {
                    position: 'absolute',
                    left: '75%',
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products4.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                },
                delay: 1500,
            })
        .addSlide('2-slide-2')
                .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product2',
                css: {
                    position: 'absolute',
                    left: 0,
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products1.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                }

            })
            .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product2',
                css: {
                    position: 'absolute',
                    left: '25%',
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products2.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                },
                delay: 500,
            })
            .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product2',
                css: {
                    position: 'absolute',
                    left: '50%',
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products3.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                },
                delay: 1000,
            })
            .addComponent({
                type: 'base',
                width: '25%',
                height: 180,
                className: 'product2',
                css: {
                    position: 'absolute',
                    left: '75%',
                    top: 100,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/products4.jpg)',
                    backgroundSize: '100% 100%',                    
                },
                animateIn: {
                    opacity: 1,
                    top: 0,
                },
                animateOut: {
                    opacity: 0,
                    top: 100,
                },
                delay: 1500,
            })
    .addSection('section_three')
            // .add
    .addSection('section_four')
    .addSection('section_five')
    .addSection('section_six')
    .load();
   

$('.bannerFont1')
    .html('<span style="font-size: 30px;"><span style="color: orange;">追求</span>极致音质</span><div style="font-size:18px;">GET THE BEST SOUND QULIATY</div>');
$('.product1').wrapAll('<div class="product1_wrap"></div>');
$('.product1_wrap').css({position: 'relative',left: '10%',top:280,width: '80%',height: 180})
$('.product1Title').html('<div style="font-size:20px;color: orange;margin-left: 50px;">产品</div> \
<div style="font-size: 16px;color:white;margin-left: 50px;">Products</div>  \
<span style="display:inline-block;width:40px;height:1px;border-bottom: 1px orange solid;"></span><span style="display:inline-block;width:80px;height:1px;border-bottom: 1px #ccc solid;"></span>')



$('.product2').wrapAll('<div class="product2_wrap"></div>');
$('.product2_wrap').css({position: 'relative',left: '10%',top:280,width: '80%',height: 180})