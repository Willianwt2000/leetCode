function numberGame(nums) {
    nums.sort(function (a, b) { return a - b; });
    var arrFirstly = [];
    for (var i = 0; i < nums.length; i += 2) {
        // console.log(nums[i+1],nums[i])
        var alice = nums[i];
        var bob = nums[i + 1];
        // console.log( `BOB position: ${i} = ${bob}` )
        // console.log( `ALICE position: ${i} = ${alice}` )
        arrFirstly.push(bob);
        arrFirstly.push(alice);
    }
    // console.log(nums);
    return arrFirstly;
}
console.log(numberGame([5, 4, 2, 3])); //[3,2,5,4]
console.log(numberGame([4, 2, 6, 6, 9, 7])); //[4,2,6,6,9,7]
