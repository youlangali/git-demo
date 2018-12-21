//   dom感受事件发生 =》 更改状态  =》影响视图
//    需求的增加   事件越来越多  状态越来越多   管理状态   合并行为
//  合并行为

function combineFilter(config){
    return function(data){
        for (var prop in config) {
            data = config[prop](data,store.getState(prop))//  最终传出的data必须是经过每个过滤条件的产物
                                //    state[prop]是视图的状态，传入当前的状态，根据状态返回data
            // console.log(data);
            // consosle.log(prop,config[prop],state[prop])
        }
        return data;
    }
}
var lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex,
    age: filterArrByAge,
})
// console.log(lastFilterArr);