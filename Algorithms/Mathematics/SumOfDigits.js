function SumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = n / 10;
    }
    return Math.floor(sum);
}

const n = 124;
console.log(SumOfDigits(n));