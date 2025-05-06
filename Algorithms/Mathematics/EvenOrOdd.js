// Check whether number is even or odd

// approch 1: By finding a reminder

function isEven(n) {
    if (n % 2 === 0) {
        return "Even"
    }
    return "odd";
}

// Time Complexity -> O(1)
// Space Complexity -> O(1)


// approch 2 : using bitwise AND operator

/***
 * The last bit of all odd numbers is always 1, while for even numbers it’s 0. 
 * So, when performing bitwise AND operation with 1,
 * odd numbers give 1, and even numbers give 0.

Ex: 5 (101)  -> 101
             &  001
                —-
                001 , so this we can say it is an odd number.
 */


function isEvenUsingBitwiseAnd(n) {
    if ((n & 1) === 0) {
        return "Even";
    }
    return "Odd";
}


const n = 101;
console.log(isEvenUsingBitwiseAnd(n));