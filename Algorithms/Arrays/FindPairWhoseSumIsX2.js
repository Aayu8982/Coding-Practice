// Find a pair in array whose sum is equal to target value, Two Sum – Pair with given Sum

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

const arr = [30, 21, 2, 79, 32];
const target = 100;
console.log(findPair(arr, target));

// Time Complexity -> O(nlogn)
// Space Complexity -> O(1)