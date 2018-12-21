function filterArrBySex(data,sex){
    if(sex == 'a'){
        return data
    }else{
        return data.filter(function(ele){
            return ele.sex == sex
        })
    }
}