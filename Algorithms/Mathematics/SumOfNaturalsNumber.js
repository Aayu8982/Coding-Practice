// Program to find sum of first n natural numbers

// Approch 1: Loop based sum

function sumOfNaturals(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Time Complexity -> O(n)
// Space Complexity -> O(1)


// Approch 2: Formula Based Solution 

/**
 * Sum of n natural number: n * (n + 1)/2
 */


function sumOfNaturalsFormulaBased(n) {
    return n * (n + 1) / 2;
}

const n = 5;
console.log(sumOfNaturalsFormulaBased(n));