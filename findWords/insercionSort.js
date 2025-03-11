var arreglo = [5, 8, 9, 6, 3];
function inserctionSort(nums) {
    // let orderArray: number[] = []
    // nums[1] = 3
    for (var i = 1; i < nums.length; i++) {
        var key = nums[i]; //8
        var j = i - 1; //0
        while (j >= 0 && nums[j] > key) { // 0 > 0  -----  
            nums[j + 1] = nums[j];
            j = j - 1;
        }
        nums[j + 1] = key; // [8]
    }
    return nums;
}
console.log(inserctionSort(arreglo));
