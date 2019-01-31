$('.wrapper').myFullPage({
    colorArray: ['red','orange','green'],
    onLeave: function(index,direction){
        // console.log(index,direction);
        $('.section').eq(index).trigger('_leave')
    },
    afterLoad: function(index,direction){
        // console.log(index,direction);
        $('.section').eq(index).trigger('_load')
    },
});

$('.section').each(function(index,ele){
    // $(ele).append(componentFactory({
    //     //  bese是为了 看你  使用哪个component,因为你可能不止要创建一个定制化的div，
    //     //你可能创建定制化的p或者其他的，其他的你可以用type：super或者其他任意的来定义
    //     type: 'base',
    //     className: 'duyi',
    //     width: 400,
    //     height: 200,
    //     text:'绯闻红ifWOEFOja按键我没法，这狗额好啊二级讴歌红哦给我个围殴会【为剧哦纠结',
    //     center: true,
    //     css: {
    //         position: 'absolute',
    //         opacity: 0,
    //         top: 0,
    //         backgroundImage: 'url(./src/img/dialog.jpg)',
    //         backgroundSize: '100% 100%',
    //         padding: '10px 15px 10px 15px',
    //         textAlign: 'justify',
    //         fontSize: '18px',
    //         fontWeight: '900',
    //         lineHeight: '25px',
    //         },
    //     animateIn: {
    //         opacity: 1,
    //         top: 150
    //     },
    //     animateOut: {
    //         opacity: 0,
    //         top: 0,
    //     },
    //     delay: 1000,
    //     event: {
    //         click: function(){
    //             alert($(this).text())
    //         },
    //         mouseenter: function(){

    //         }

    //     }

    // }))
})
$('.section').on('_leave',function(){
    $(this).find('.component').trigger('cpLeave')
})
$('.section').on('_load',function(){
    $(this).find('.component').trigger('cpLoad')
})