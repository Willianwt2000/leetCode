function convertToTitle(columnNumber) {
    var letterString = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var resulString = '';
    while (columnNumber > 0) {
        columnNumber--; // empieza en 1
        //module
        var restModule = columnNumber % 26;
        var actualCharacter = letterString[restModule];
        resulString = actualCharacter + resulString;
        columnNumber = Math.floor(columnNumber / 26);
        console.log(restModule);
    }
    return resulString;
}
;
console.log(convertToTitle(28));
