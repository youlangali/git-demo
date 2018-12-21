function combineFilter(config){
    return function (data) {
        for (var prop in config) {
            data = config[prop](data,store.getState(prop))
            // console.log(prop,config[prop],state[prop])
        }
        return data
    }
    
}
var config = {
    text: filterArrByText,
    sex: filterArrBySex
}
var lastFilterArr = combineFilter(config);
