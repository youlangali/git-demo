//   dom感受事件发生 =》 更改状态  =》影响视图
//    需求的增加   事件越来越多  状态越来越多   管理状态   合并行为
//  合并行为

function combineFilter(config){
    return function(data){
        for (var prop in config) {
            data = config[prop](data,state[prop])
            // console.log(prop,config[prop],state[prop])
        }
        return data;
    }
}
var lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex
})
// console.log(lastFilterArr);