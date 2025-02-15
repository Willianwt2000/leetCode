function isValid(s: string): boolean {

//   let arrayString: string[] = s.split("");


//  let counter: number = 0;

//   for (let i = 0; i < arrayString.length; i++) {

//     if (arrayString[i] === "("  || arrayString[i] === "[" || arrayString[i] === "{")
//     {
//       counter++
//     } else if ((arrayString[i] === ")" ||  arrayString[i] === "}") || (arrayString[i] === "]") ) {
//       counter--


//     }
    

//   }

//   return counter === 0;

 
const stack: string[] = []
const characters = {
  "(": ")",
  "[": "]",
  "{": "}",
}
 
for (const char of s) {
  if (characters[char]) {
    stack.push(char)
  } else {
    const end = stack.pop();
    if (characters[end as string] !== char) {
      return false;
    }
  }
}
  
return stack.length === 0;    
};

//Excercise incompleted 
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]")) // false
console.log(isValid("[]"))
console.log(isValid("(){}}[]")) //false
console.log(isValid("{}][")) //false
console.log(isValid("")) //false
