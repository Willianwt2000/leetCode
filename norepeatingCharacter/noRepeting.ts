function isValid(s: string): boolean {
    
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
                console.log( char)
                  return false;     
          }
      }
  }
  
  return stack.length === 0;   
};




console.log(isValid("([])")); // ( ,[,]


