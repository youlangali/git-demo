
//   根据输入的文本内容来筛选
function filterArrByText(text,arr){
    if(!text){
        return arr;
    }else{
        return arr.filter(function(ele,index,self){
            return ele.name.indexOf(text) != -1
        })
    }
}
