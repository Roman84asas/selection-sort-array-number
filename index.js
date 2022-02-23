module.exports = function (array) {
    // var tempArr = array; // you don't need this
    
    // Also, it is good to use let instead of var
    let tempVal = 0;
    for (let i = 0, len = array.length; i < len; i++) {
        let minValIndex = i;
        for (let j = minValIndex+1; j < len; j++) {
            if(array[j] < array[minValIndex]) {
                minValIndex = j;
            }
        }
        tempVal = array[i];
        array[i] = array[minValIndex];
        array[minValIndex] = tempVal;
    }
    return array;
};
