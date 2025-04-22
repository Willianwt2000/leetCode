function merge(nums1, m, nums2, n) {
    var size = m + n;
    var k = 0;
    console.log(nums1[k]);
    if (nums1.length <= 1) {
        nums1[k] = nums2[k];
        nums1.shift();
    }
    else {
        nums1.splice(-3);
    }
    for (var i = 0; i < n; i++) {
        nums1.push(nums2[i]);
        k++;
    }
    nums1.sort(function (a, b) { return a - b; });
    console.log(nums1);
    return nums1;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //[1]
console.log(merge([0], 0, [1], 1)); //[1]
