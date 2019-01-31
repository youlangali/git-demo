//  component中样式和事件的方法
componentFactory = function(config){
    $Div = $('<div class="component"></div>');
    //    定制 div
    config.css && $Div.css(config.css)
    config.className && $Div.addClass(config.className);
    config.width && $Div.css({width: config.width});
    config.height && $Div.css({height: config.height});
    config.text && $Div.text(config.text);
   
    // config.html && $Div.html(config.html);
    // console.log($Div);
    // $Div.html('<p>阿纲</p>');
    config.center && $Div.css({position: 'absolute',left: '50%',marginLeft: -config.width / 2});
    if(config.event){
        for(var prop in config.event){
            $Div.on(prop,config.event[prop])
        }
    }
    $Div.on('cpLeave',function(){
        var self = this;
        setTimeout(function(){
            config.animateOut && $(self).animate(config.animateOut)
        },config.delay || 0)
        
    })
    $Div.on('cpLoad',function(){
        var self = this;
        setTimeout(function(){
            config.animateIn && $(self).animate(config.animateIn)
        },config.delay || 0)
        
    })
    return $Div;
}