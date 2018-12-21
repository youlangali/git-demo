function filterArrByText(data,text){
    if(!text){
        return data
    }else{
        return data.filter(function(ele){
            return ele.name.indexOf(text) != -1;
        })
    }
}