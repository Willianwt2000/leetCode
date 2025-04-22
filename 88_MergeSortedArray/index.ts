
function merge(nums1: number[], m: number, nums2: number[], n: number): void{
    for (let i = 0; i < n; i++) {
      nums1[m+i] = nums2[i]
    }
    nums1.sort((a,b) => a-b);
    return 
}



console.log(merge([1,2,3,0,0,0],3,[2,5,6],3)); //[1,2,2,3,5,6]



console.log(merge([1],1,[],0)); //[1]
console.log(merge([0],0,[1],1)); //[1]