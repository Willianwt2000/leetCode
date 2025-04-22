function merge(nums1, m, nums2, n) {
    //let size = m + n;
    for (var i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort(function (a, b) { return a - b; });
    console.log(nums1);
    return;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //[1]
console.log(merge([0], 0, [1], 1)); //[1]
