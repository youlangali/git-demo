function createStore(initialValue){
    var state = initialValue || {};
    var list = [];
    //  得到该状态
    function getState(type){
        return state[type]
    }
    // 分发行为，更改状态
    function dispatch(action){
        // console.log(action);
        state[action.type] = action.value;
        // console.log(list);
        list.forEach(function(ele){
            ele();
        })
        
    }
    //  订阅处理
    function subscribe(func){
        list.push(func);
    }
    return {
        getState:getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}
var store = createStore({text: '',sex: 'a'})