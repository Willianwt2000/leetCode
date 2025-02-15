function isValid(s) {
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
    var stack = [];
    var characters = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (characters[char]) {
            stack.push(char);
        }
        else {
            var end = stack.pop();
            if (characters[end] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
;
//Excercise incompleted 
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]")); // false
console.log(isValid("[]"));
console.log(isValid("(){}}[]")); //false
console.log(isValid("{}][")); //false
