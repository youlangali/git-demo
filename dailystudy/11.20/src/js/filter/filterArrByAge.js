function filterArrByAge(data,age){
    if(!age){
        return data
    }else{
        return data.filter(function(ele,index,self){
            return ele.age <= age;
        })
    }
}