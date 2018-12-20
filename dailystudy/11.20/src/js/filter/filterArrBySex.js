
 //  根据性别按钮通过点击，来筛选data


 function filterArrBySex(sex, data) {
    if (sex == 'a') {
        return data;
    } else {
        return data.filter(function (ele, index, self) {
            return ele.sex == sex;
        })
    }
}