function enCrypt(text) {
    var textArr = text.split("");
    for (var i = 0; i < text.length; i++) {
        console.log(text[i]);
        if (text[i] === "a") {
            textArr[i] = "ai";
        }
        else if (text[i] === "e") {
            textArr[i] = "enter";
        }
        else if (text[i] === "i") {
            textArr[i] = "imes";
        }
        else if (text[i] === "o") {
            textArr[i] = "ober";
        }
        else if (text[i] === "u") {
            textArr[i] = "ufat";
        }
    }
    return textArr.join('').toLowerCase();
}
console.log(enCrypt("Hola como estas"));
function deCrypt(text) {
    var resultado = "";
    var i = 0;
    while (i < text.length) {
        if (text.startsWith("ai", i)) {
            resultado += "a";
            i += 2;
        }
        else if (text.startsWith("et", i)) {
            resultado += "e";
            i += 2;
        }
        else if (text.startsWith("imes", i)) {
            resultado += "i";
            i += 4;
        }
        else if (text.startsWith("ober", i)) {
            resultado += "o";
            i += 4;
        }
        else if (text.startsWith("ufat", i)) {
            resultado += "u";
            i += 4;
        }
        else {
            resultado += text[i];
            i++;
        }
    }
    return resultado.toLowerCase();
}
console.log(deCrypt("hoberlai cobermober enterstais"));
