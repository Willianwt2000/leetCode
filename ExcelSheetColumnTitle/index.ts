function convertToTitle(columnNumber: number): string {
    let letterString: string[] = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let resulString: string = '';

    while (columnNumber > 0) {
      columnNumber--; // empieza en 1

      //module
      let restModule = columnNumber % 26;
      

      let actualCharacter = letterString[restModule];
      resulString = actualCharacter + resulString;



      columnNumber = Math.floor(columnNumber / 26)
      console.log(restModule)
    }

   return resulString; 
};


console.log(convertToTitle(28))
