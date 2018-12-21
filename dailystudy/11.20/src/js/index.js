 //  盒模型应用
    //   经典布局方式：图片使用定位，脱离content， 使用padding，将content范围缩小
    var personArr = [
        {name: '张三',src: "./src/img/1.jpg", dis: '爱学习', sex: 'm', age: 18 },
        {name: '张思',src: "./src/img/2.jpg", dis: '加班', sex: 'f', age: 22 },
        {name: '李四',src: "./src/img/3.jpg", dis: '休息', sex: 'm', age: 19 },
        {name: '李牧',src: "./src/img/4.jpg", dis: '抄袭', sex: 'f', age: 25 },
        ]
        //  initial 
        var inp = document.getElementsByClassName('inp')[0];
        var flWrap = document.getElementsByClassName('flWrap')[0];
        var byAge = document.getElementById('byAge');
        var ul = flWrap.getElementsByTagName('ul')[0];
        var btn = [].slice.call(document.getElementsByClassName('btn'),0);
        //  
        
        store.subscribe(function(){
            renderPage(lastFilterArr(personArr));
        })
        // var state = {
        //     text: '',
        //     sex: 'a',
        //     age: ''
        // }
        // 数据渲染
        function renderPage(arr){
            var htmlStr = '';
            arr.forEach(function(ele,index,self){
                htmlStr = htmlStr + '<li><img src="' + ele.src + '"/><p class="name">'+ ele.name +'</p><p class="des">'+ ele.dis +'</p></li>'
                
            }) 
        // console.log(htmlStr);
        ul.innerHTML = htmlStr;
        }
        renderPage(personArr);
        //  当输入内容时，将内容与数据进行比对，选出最终符合条件的数据
        
        // console.log(!newArr)
        inp.oninput = debounce(function(){
                // nameArr = filterArrByText(this.value,sexArr);
                // state.text = this.value;
                // state.age = this.value;
                // var action = {type: 'text',value: this.value};
                store.dispatch({type: 'text',value: this.value});
                // store.dispatch({type: 'age',value: this.value});
                // console.log(state.text);
        },500) ;
        byAge.onchange = function(){
            // console.log(this.value);
            store.dispatch({type: 'age',value: this.value});
        }
        // console.log(byAge);
        // function filterArrByText(text,arr){
        //     if(!text){
        //         return arr;
        //     }else{
        //         return arr.filter(function(ele,index,self){
        //             return ele.name.indexOf(text) != -1
        //         })
        //     }
        // }

        // 按钮事件
        btn[2].className = 'btn active';

        btn.forEach(function(ele,index,self){
            ele.onclick = function(){
                chaActive(ele);
                // state.sex = this.getAttribute('sex');//  状态根据事件的进行而改变
                store.dispatch({type: 'sex',value: this.getAttribute('sex')});
                // sexArr = filterArrBySex(this.getAttribute('sex'),nameArr);
                // console.log(lastFilterArr(personArr));
                // renderPage(lastFilterArr(personArr));
            }
        })
        var lastActiveBtn = btn[2];
        function chaActive(activeBtn){
            activeBtn.className = 'btn active';
            lastActiveBtn.className = 'btn';
            lastActiveBtn = activeBtn;
        }
        // //  按钮通过点击，来筛选data
        // function filterArrBySex(sex, data) {
        //     if (sex == 'a') {
        //         return data;
        //     } else {
        //         return data.filter(function (ele, index, self) {
        //             return ele.sex == sex;
        //         })
        //     }
        // }