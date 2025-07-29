function singleNumber(nums) {
    var frecuencia = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (frecuencia.has(num)) {
            frecuencia.set(num, frecuencia.get(num) + 1);
        }
        else {
            frecuencia.set(num, 1);
        }
    }
    for (var _a = 0, frecuencia_1 = frecuencia; _a < frecuencia_1.length; _a++) {
        var _b = frecuencia_1[_a], key = _b[0], value = _b[1];
        if (value === 1) {
            return key;
        }
    }
    return undefined;
}
;
console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
