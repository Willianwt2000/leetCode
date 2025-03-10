let arreglo = [1,2,3,4,5,6];



//inserccion sort
function invertir(nums) {
  let aux;
  let pos;

  for (let i = 0; i < nums.length; i++) {
      aux = nums[i];
      pos = i;

    
    while ((pos > 0) && (nums[pos - 1] > aux)) {
      nums[pos] = nums[pos-1]
      pos--;
    }

     nums[pos] = aux;
  


  
    
  }
  
  return nums;
}

for (let i = arreglo.length; i>=0; i--) {
  console.log(arreglo[i])
  
}


console.log(invertir(arreglo))

console.log("hola")