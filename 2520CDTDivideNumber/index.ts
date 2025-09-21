function countDigits(num: number): number {
    let digits: string[] = num.toString().split("");
    let count:number = 0;

    for (const nums of digits) {
        let digit: number = parseInt(nums);
        if (num % digit == 0) count++;
    }
    return count;


};