
//   根据输入的文本内容来筛选
function filterArrByText(data,text){
    if(!text){
        return data;
    }else{
        return data.filter(function(ele,index,self){
            return ele.name.indexOf(text) != -1
        })
    }
}
