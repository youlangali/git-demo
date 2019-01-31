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

        jQuery.prototype.myOn = function(type,handle){
            for(var i = 0;i < this.length;i ++){
                // cacheEvent是作为一个缓存事件类型和处理函数的对象
                if(!this[i].cacheEvent){
                    this[i].cacheEvent = {};
                }
                if(!this[i].cacheEvent[type]){
                    this[i].cacheEvent[type] = [handle]// 将事件处理函数放置在数组中，因为一个事件类型可以有多个处理函数
                }else{
                    this[i].cacheEvent[type].push(handle)//  如果已有处理函数，就加入新的处理函数
                }
            }
        }
        jQuery.prototype.myTrigger = function(type){
            var params = arguments.length > 1 ? [].slice.call(arguments,1) : [];
            var self = this;
            for(var i = 0;i < this.length;i ++){
                if(this[i].cacheEvent[type]){
                    this[i].cacheEvent[type].forEach(function(ele,index){
                        ele.apply(self,params)
                    })
                }
            }
        }
        jQuery.prototype.myQueue = function(){
            var queueObj = this;
            var queueName = arguments[0] || 'fx';
            var addFun = arguments[1] || null;
            var len = arguments.length;
            if(len == 1){
                return queueObj[0][queueName];
            }
            //  queue                                        创建新的队列名称           或者往队列中加新的内容
            queueObj[0][queueName] == undefined ? queueObj[0][queueName] = [addFun] : queueObj[0][queueName].push(addFun);
            return this;
        }
        jQuery.prototype.myDequeue = function(){
            var self = this;
            var queueName = arguments[0] || 'fx';
            var queueArr = this.myQueue(queueName);
            var currFun = queueArr.shift();
            if(currFun == undefined){
                return ;
            }
            var next = function(){
                self.myDequeue(queueName);
            }
            currFun(next);
            return this;
        }
        jQuery.prototype.myDelay = function(duration){
            var queueArr = this[0]['fx'];
            //  往队列中放个函数占位，为的的就是duration时间后再调用其他的函数
            queueArr.push(function(next){
                setTimeout(function(){
                    next();
                },duration)
            })
            return this
            
        }
        jQuery.prototype.myAnimate = function(json,callback){
            var self = this;
            var len = this.length;
            //  放入队列的内容函数
            var baseFun = function(next){
                var times = 0;
                for(var i = 0;i < len;i ++){
                    move(self[i],json,function(){
                        times ++;
                        if(times == len){
                            callback && callback();
                            next();
                        }
                    })
                }
            }

            //   入队列
        this.myQueue('fx',baseFun);
        // 出队， 入一个出一个
        if(this.myQueue('fx').length == 1 ){
            this.myDequeue('fx');
        }


        function getStyle(ele,attr){
            if(ele.currentStyle){
                return ele.currentStyle[attr];
            }else{
                return window.getComputedStyle(ele,false)[attr];
            }
        }
        
        function move(ele, target, callback) {
            clearInterval(ele.timer);
            var speed, cur;
            
            ele.timer = setInterval(function () {
                // debugger;
                var stop = true;
                for (var attr in target) {
                    if (attr == 'opacity') {
                        cur = parseFloat(getStyle(ele, 'opacity')) * 100;
                    } else {
                        cur = parseInt(getStyle(ele, attr));
                    }
                    // console.log(cur)
                    speed = (target[attr] - cur) / 7;
                    // console.log(Math.ceil(speed));
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (attr == 'opacity') {
                        ele.style[attr] = (cur + speed) / 100;
                    } else {
                        ele.style[attr] = cur + speed + 'px';
                    }
                    if (target[attr] !== cur) {
                        stop = false;
                    }
                    // console.log(speed);
                }
                if (stop) {
                    // console.log(stop);
                    clearInterval(ele.timer);
                    typeof callback == 'function' ? callback() : '';
                }
            }, 30)
        }
            return this;
        }
        jQuery.myCallback = function(){
            // 'once'   'memory' 'onceMemory'    'null'
            // 存储参数
            var options = arguments[0] || '';
            // 通过add来加入的方法
            var list = [];
            // 记录当前要执行的函数的索引
            var fireIndex = 0;
            // 记录是否被fire过
            var fired = false;
            //  实际参数列表
            var args = [];
            var fire = function(){
                for(;fireIndex < list.length; fireIndex ++){
                    list[fireIndex].apply(window,args);
                }
                if(options.indexOf('once') != -1){
                    list = [];
                    fireIndex = 0; 
                }
                
                
            }
            return {
                add: function(func){
                    list.push(func);
                    if(options.indexOf('memory') != -1 && fired){
                        fire();
                    }
                    return this 
                },
                fire: function(){
                    fireIndex = 0;
                    args = arguments;
                    fire();
                    fired = true;
                }

            }
        }
        jQuery.myDeferred = function(){
            var arr = [
                [
                    jQuery.myCallback('once memory'),'done','resolve'
                ],[
                    jQuery.myCallback('once memory'),'fail','reject'
                ],[
                    jQuery.myCallback('memory'),'progress','notify'
                ]
            ]
            var pendding = true;
            //  注册函数
            var deferred = {};
            for (var i = 0; i < arr.length; i++) {
                //  done 方法相当于callback的add方法
                //   给每个done方法相对应的callback的add方法
                deferred[arr[i][1]] = (function (index) {
                    return function (func) {
                        arr[index][0].add(func)
                    }
                })(i)
                //  触发函数
                deferred[arr[i][2]] = (function (index) {
                    return function () {
                        var args = arguments;
                        if (pendding) {
                            arr[index][0].fire.apply(window, args)
                            arr[index][2] == 'resolve' || arr[index][2] == 'reject' ? pendding = false : '';
                        }
                    }
                })(i);
            }
            return deferred
        }
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
