
function merge(nums1, m, nums2, n){
  let size = m+n
  let k = 0
  console.log(nums1[k])
  if(nums1.length <= 1 ){
    nums1[k] = nums2[k]
    nums1.shift()
  }
  else {
    nums1.splice(-3)
  }


    for (let i = 0; i < n; i++) {
      nums1.push(nums2[i])

      k++;
    }

    nums1.sort()
    console.log(nums1)
 
    return nums1
};





