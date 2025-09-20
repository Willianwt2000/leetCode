//My solution
// function calPoints(operations: string[]): number {
//     let result: number[] = [];

//   let add:number = 0;
//   for (let i = 0; i < operations.length; i++) {

//     if (operations[i] != "+" && operations[i] != "D" && operations[i] != "C") {
//       let nums = parseInt(operations[i]);
//       result.push(nums);
//     }
    
    
//     for (let j = result.length - 1; j >= 0; j--) {

//       if (operations[i] == "C") {
//        result.splice(j,1)
//        break
//      } 

    
     
//      if (operations[i] == "+") {
//         result.push(result[j - 1] + result[j]);
//         break
//       } 
      
//       if(operations[i] == "D") {
//         result.push(2*result[j]);
//         break
      
//       } 
//     }

//   }

//   for (const num of result) {
//     add+=num;
    
//   }

//   return add;
// };


