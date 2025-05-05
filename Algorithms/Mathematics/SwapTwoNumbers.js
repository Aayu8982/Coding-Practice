// approch 1
function swap1(a, b) {
    let temp = a;
    a = b;
    b = temp;

    return [a, b];
}

// approch 2
function swap2(a, b) {

    return [a, b] = [b, a];
}

// approch 3
function swap3(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b];
}

let a = 10;
let b = 20;

console.log(swap3(a, b));