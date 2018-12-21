function debounce(handler,dely){
        var timer = null;
    return function (){
        var self = this,arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            handler.apply(self,arg);
        },dely)
    }
    }