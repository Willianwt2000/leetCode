function addDigits(num: number): number {
 while (num >= 10) {
        let sum: number = 0;
        let numStr: string = num.toString();
        
        for (let i = 0; i < numStr.length; i++) {
            sum += parseInt(numStr[i]);
        }
        
        num = sum;
    }
    
    console.log(num)
    return num;
}

console.log(addDigits(38));
