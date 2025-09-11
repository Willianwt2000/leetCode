var uniqueNumbers = function (nums) {
    var frecuensy = new Map();
    for (var _i = 0, frecuensy_1 = frecuensy; _i < frecuensy_1.length; _i++) {
        var _a = frecuensy_1[_i], key = _a[0], value = _a[1];
        console.log("Key ".concat(key, " ---- Value ").concat(value));
    }
    return 0;
};
console.log(uniqueNumbers([1, 2, 1, 2, 1, 2, 5, 2, 2, 2, 1, 4, 5, 5, 3]));
