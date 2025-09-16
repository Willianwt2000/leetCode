function romanToInt(s) {
    var rNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    //count value
    var totalvalue = 0;
    for (var i = 0; i < s.length; i++) {
        //curret value
        var curretV = s[i];
        var curretValueSimbol = romanToInt[curretV];
        var simbol = s[i + 1];
        var nextSimbol = romanToInt[simbol];
        if (nextSimbol < curretValueSimbol) {
            totalvalue -= curretValueSimbol;
        }
        else {
            totalvalue += curretValueSimbol;
        }
    }
    return totalvalue;
}
// vl = v + l = 6 si la letra pequeña esta delante del mayor pues se suma.
//------
// lv = peque = l   -  mayor = v = 4  // si la letra pequeña esta detras del mayor pues se suma.
console.log(romanToInt("III")); //3
// console.log(romanToInt("LVIII")); //58
// console.log(romanToInt("MCMXCIV")); //58
