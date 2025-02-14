function isValid(s: string): boolean {

  let arrayString: string[] = s.split("");




  for (let i = 0; i < arrayString.length; i++) {

    if ((arrayString[i] === "(" && arrayString[i + 1] === ")") || (arrayString[i] === "[" && arrayString[i+1] === "]"))
    {
      return true;
    }
    
  }

  return false;
    
};

//Excercise incompleted 