function isValid(s) {
    var stack = [];
    var characters = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    //1  2  3  4
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) { //clave o index       (  [  ]  )
        var char = s_1[_i];
        if (characters[char]) { //valor   )  ]
            stack.push(char); // stack = [,       ]
        }
        else {
            var end = stack.pop(); // end = [, end = ( ,     ] !== ] = false -*------ ) !== ) = false
            //   console.log(end)
            if (characters[end] !== char) {
                console.log(char); // 
                return false; //false          
            }
        }
    }
    return stack.length === 0;
}
;
console.log(isValid("([])")); // ( ,[,]
