//  结构生成的方法
var pageEngine = {
    init: function(selector,colorsArray){
        this.$w = $(selector);//  用this是为在pageEngine中能够使用$w这个变量，因为这样他是pageEngine中的全局变量
        this.slideFlag = false;
        this.colorsArray = colorsArray;
        return this;
    },
    addSection: function(className){
        this.$section = $('<div class="section"/>').addClass(className);
        this.$section.appendTo(this.$w);
        this.slideFlag = false;
        return this;
    },
    addSlide: function(className){
        this.$slide = $('<div class="slide"/>').addClass(className);
        this.$slide.appendTo(this.$section);
        this.slideFlag = true;
        return this;
    },
    addComponent: function(config){
        var ocp = null;
        switch(config.type){
            case 'base':
                ocp = componentFactory(config);
                break;
            // case 'super':
            //     ocp = componentSuperFactory(config);
            //     break;
        }
        console.log(config.text());
        this.slideFlag ? ocp.appendTo(this.$slide) : ocp.appendTo(this.$section);
        return this;
    },
    bindEvent: function(){
        this.$w.find('.section').on({
            _leave: function(){
                $(this).find('.component').trigger('cpLeave')
            },
            _load: function(){
                $(this).find('.component').trigger('cpLoad')
            },

        })
    },
    load: function(){
        var self = this;
        this.bindEvent();
        this.$w.myFullPage({
            colorsArray: this.colorsArray,
            onLeave: function(index){
               self.$w.find('.section').eq(index).trigger('_leave')
            },
            afterLoad: function(index){
                self.$w.find('.section').eq(index).trigger('_load')
            }
        })
        this.$w.find('.section').eq(0).trigger('_load');
    }
}