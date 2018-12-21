
 //  根据性别按钮通过点击，来筛选data


 function filterArrBySex(data,sex) {
    // console.log(data);
    if (sex == 'a') {
        return data;
    } else {
        return data.filter(function (ele, index, self) {
            return ele.sex == sex;
        })
    }

    // console.log(data);
}