//   分发行为
function createStore(initialState){
    var state = initialState || {};
    var list = [];
    //  获取功能
    function getState(type){
        return state[type];
    }
    //  分发功能,
    function dispatch(action){
        //   对例如text：‘’的内容进行更改
        state[action.type] = action.value;
        //   调用之前订阅过的函数,只要状态一改变，下方的函数就会别触发
        list.forEach(function(ele,index,slef){
            // console.log(ele);
            ele();
        })
    }
    //   订阅功能
    function subscribe(func){
        list.push(func);
    }
    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe,
    }
}
var store = createStore({text: '',sex: 'a',age: '25'});
//   store 是个包含各个函数的对象