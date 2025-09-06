function addDigits(num) {
    var numsSt = num.toString();
    if (numsSt.length === 1)
        return num;
    var result = 0;
    var i = 0;
    while (i < numsSt.length) {
        result += parseInt(numsSt[i]);
        if (numsSt.length != 1) {
            numsSt = result.toString();
        }
        i++;
        console.log(i);
    }
    return parseInt(numsSt);
}
console.log(addDigits(38));
