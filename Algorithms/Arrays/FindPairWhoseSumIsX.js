// Find a pair in array whose sum is equal to target value, Two Sum – Pair with given Sum

/**
* 
* Approch 3
* Step-by-step approach:
* Create an empty Hash Set or Unordered Set
* Iterate through the array and for each number in the array:
* Calculate the complement (target – current number).
* Check if the complement exists in the set:
* If it is, then pair found.
* If it isn’t, add the current number to the set.
* If the loop completes without finding a pair, return that no pair exists.
 */

function findPair(arr, target) {
    let st = new Set();
    for (let i = 0; i < arr.length; i++) {
        let temp = target - arr[i];
        if (st.has(temp)) {
            return `${arr[i]} ${temp}`
        }
        st.add(arr[i]);
    }
    return -1;
}

// Time Complexity -> O(n)
// Space Complexity -> O(n)

//*********************************************************************

// Approch 2 (Two Pointer Approch)
function findPair(arr, target) {
    arr.sort((a, b) => (a - b));

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];

        if (sum == target) {
            return `${arr[start]} ${arr[end]}`
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
    return -1;
}

// Time Complexity -> O(nlogn)
// Space Complexity -> O(1)

//*********************************************************************

/**
 *  Approch 1
 *  Algorithm
 *  find all posible pair and check any of the pair adds upto target value
 *  to generate all pairs we run two nested loops 
 */

function findPair1(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target)
                return `[${arr[i]},${arr[j]}]`
        }
    }
    return "not found";
}

// Time Complexity -> O(n^2)
// Space Complexity -> O(1)


const arr = [30, 21, 2, 79, 32];
const target = 100;
console.log(findPair1(arr, target));
