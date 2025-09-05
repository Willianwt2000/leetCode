function climbStairs(n) {
    var num1 = [];
    var num2 = [];
    for (var i = 1; i <= n - 1; i++) {
        console.log("Numbers: ".concat(i));
        num1.push(i);
        num2.push(i);
    }
    console.log(num1);
    console.log(num2);
    return 0;
}
;
console.log(climbStairs(3));
