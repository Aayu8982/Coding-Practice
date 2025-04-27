// Find a pair in array whose sum is equal to target value, Two Sum – Pair with given Sum( Hash Approch)
/**
* 
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

const arr = [30, 21, 2, 79, 32];
const target = 100;
console.log(findPair(arr, target));

// Time Complexity -> O(n)
// Space Complexity -> O(n)