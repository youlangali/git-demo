var personArr = [
    {name: ' 张三',age: 18,sex: 'f',src:'./src/img/1.jpg', des: '土豪'},
    {name: ' 张思',age: 20,sex: 'm',src:'./src/img/2.jpg', des: '土鳖'},
    {name: ' 黄色',age: 22,sex: 'm',src:'./src/img/3.jpg', des: '农村'},
    {name: ' 大黄',age: 25,sex: 'f',src:'./src/img/4.jpg', des: '飞机'},
]
// ini
var flWrap = document.getElementsByClassName('flWrap')[0];
var inp = document.getElementsByClassName('inp')[0];
var btn =[].slice.call(document.getElementsByClassName('btn'),0) ;
// var state = {
//     text: '',
//     sex: 'a'
// }
store.subscribe(function(){
    //   更新视图或者更新页面
    renderPage(lastFilterArr(personArr))
});

function renderPage(data){
    var htmlStr = '';
    data.forEach(function(ele,index,self){
        htmlStr = htmlStr + '<li><img src="' + ele.src + '"><p class="name">'+ ele.name +'</p><p class="des">'+
        ele.des +'</p></li>'
    })
    flWrap.innerHTML = htmlStr;
}
renderPage(personArr);

var lastActiveBtn = btn[2];
btn.forEach(function(ele,index,self){
    ele.onclick = function(){
        chaActive(ele);
        // state.sex = this.getAttribute('sex');
        // renderPage(lastFilterArr(personArr));
        store.dispatch({type: 'sex',value: this.getAttribute('sex')})
    }
})
inp.oninput = function(){
    //  state.text = this.value;
    //  renderPage(lastFilterArr(personArr));
    store.dispatch({type: 'text',value: this.value})
}
function chaActive(activeBtn){
    activeBtn.className = 'btn active';
    lastActiveBtn.className = 'btn';
    lastActiveBtn = activeBtn;
}