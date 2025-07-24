function singleNumber(nums) {
    nums.sort();
    console.log("Number: " + nums);
    var count = 0;
    var aux = 0;
    for (var i = 0; i < nums.length; i++) {
        if (aux === nums[i]) {
            count++;
        }
    }
    return 0;
}
;
console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
