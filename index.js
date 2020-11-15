module.exports = function (array) {
    var tempArr = array;
    var countArr = tempArr.length;
    var tempVal = 0;
    for (var i = 0; i < countArr; i++) {
        var minVal = i;
        for (var j = minVal+1; j < countArr; j++) {
            if(tempArr[j] < tempArr[minVal]) {
                minVal = j;
            }
        }
        tempVal = tempArr[i];
        tempArr[i] = tempArr[minVal];
        tempArr[minVal] = tempVal;
    }
    return tempArr;
};