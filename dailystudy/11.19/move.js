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
