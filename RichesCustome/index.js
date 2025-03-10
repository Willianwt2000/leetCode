function maximumWealth(accounts) {
    var maximTotalSum = 0;
    for (var i = 0; i < accounts.length; i++) {
        var currentSum = 0;
        for (var _i = 0, _a = accounts[i]; _i < _a.length; _i++) {
            var row = _a[_i];
            currentSum += row;
        }
        // if (currentSum > maximTotalSum) {
        //   maximTotalSum = currentSum;
        // }
        currentSum = Math.max(maximTotalSum, currentSum);
    }
    return maximTotalSum;
}
console.info(maximumWealth([[1, 2, 3], [5, 6, 8], [9, 8, 7]]));
