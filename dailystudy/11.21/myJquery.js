(function(){
        function jQuery(selector){
            return new jQuery.prototype.init(selector);
        }
        jQuery.prototype.init = function(selector){
            // this = {};
            // 选出dom并且包装成jQuery对象，  返回
             //   id   class
            this.length = 0;
            // null undefined
            if(selector == null){
                return this
            }
            if(typeof selector == 'string' && selector.indexOf('.') != -1){
                var dom = document.getElementsByClassName(selector.slice(1));
            }else if(typeof selector == 'string' && selector.indexOf('#') != -1){
                var dom = document.getElementById(selector.slice(1));
            }
            
            if(selector instanceof Element || dom.length == undefined){
                this[0] = dom || selector;
                this.length++;
            }else{
                //  基础铺垫
                for(var i = 0;i < dom.length;i ++){
                    this[i] = dom[i];
                    this.length++;
                }
            }
        }
        jQuery.prototype.get = function(num){
            // if(num == null){
            //     return [].slice.call(this,0)
            // }else{
            //     if(num >= 0){
            //         return this[num]
            //     }else{
            //         return this[num + this.length]
            //     }
            // }
            console.log(this);
            return num != null ? (num >= 0 ?  this[num] :  this[num + this.length]) : [].slice.call(this,0)
        }
        jQuery.prototype.pushStack = function(dom){
            // dom newObj
            // if(dom.construct == jQuery){
            //     dom.prevObject = this;
            // }else{
            //     dom = jQuery(dom);// 如果传进来的是原生dom如eq传进来的
            //     //   就封装成jQuery对象
            //     dom.prevObject = this;// 谁调用pushStack方法，就指代谁
            // }
            // 和上面的if else表达的意思一样
            if(dom.constructor != jQuery){
                dom = jQuery(dom);
            }
            dom.prevObject = this;
            return dom;
        }
        jQuery.prototype.eq = function(num){
            var dom =  num != null ? (num >= 0 ?  this[num] :  this[num + this.length]) : null;
            return this.pushStack(dom)
        }
        jQuery.prototype.add = function(selector){
            var curObj = jQuery(selector);
            var baseObj = this;
            var newObj = jQuery();
            // console.log(newObj);
            for(var i = 0;i < curObj.length;i ++){
                newObj[newObj.length++] = curObj[i]
            }
            for(var i = 0;i < baseObj.length; i++){
                newObj[newObj.length++] = baseObj[i]
            }
            // newObj.prevObject = this;
           return this.pushStack(newObj)
        // this.pushStack(newObj);
            // return newObj;
        }
        jQuery.prototype.end = function(selector){
            return this.prevObject;
        }
        // $('.demo').get(0);
        // [].slice.call(this,0)可以讲类数组变成完整的数组
        jQuery.prototype.css = function(config){
            //   循环操作每一个dom
            for(var i = 0;i < this.length;i ++){
                for(var attr in config){
                    this[i].style[attr] = config[attr];
                }
            }
            //  链式操作
            return this
        }
        jQuery.prototype.init.prototype = jQuery.prototype;
        window.$ = window.jQuery = jQuery;
    }())
