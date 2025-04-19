function singleNumber(nums) {
    var uniqueNumber = 0;
    for (var i = 0; i < nums.length; i++) {
        uniqueNumber ^= nums[i];
    }
    return uniqueNumber;
}
;
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([4, 1, 2, 1, 2])); // 1
