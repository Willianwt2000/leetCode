function commonChars(words) {
    var charRepeating = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            if (words[i][j] === words[i][j + 1]) {
                charRepeating.push(words[i][j]);
            }
        }
    }
    return charRepeating;
}
console.log(commonChars(["bella", "label", "roller"])); //["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c","o"]conm
