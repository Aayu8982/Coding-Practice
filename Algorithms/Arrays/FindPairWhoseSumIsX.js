// Find a pair in array whose sum is equal to target value, Two Sum – Pair with given Sum

/**
 *  Algorithm
 *  find all posible pair and check any of the pair adds upto target value
 *  to generate all pairs we run two nested loops 
 */

function findPair(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target)
                return `[${arr[i]},${arr[j]}]`
        }
    }
    return "not found";
}

const arr = [30, 21, 2, 79, 32];
const target = 100;
console.log(findPair(arr, target));

// Time Complexity -> O(n^2)
// Space Complexity -> O(1)