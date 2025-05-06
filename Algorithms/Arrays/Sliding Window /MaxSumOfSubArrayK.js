
// Brute Force Solution
function maxSum(arr, n, k) {
    if (n < k) {
        console.log("Array Size must be gretaer then k");
    }

    let max_sum = -Infinity;

    for (let i = 0; i <= n - k; i++) {
        let curr_sum = 0;
        for (let j = i; j < i + k; j++) {
            curr_sum += arr[j];
        }

        if (curr_sum > max_sum) {
            max_sum = curr_sum
        }
    }
    return max_sum;
}

// Time Complexity -> O(k * n)
// Space Compelxity -> O(1)



// Using Sliding Window Algorithms
function maxSumUsingSlidingWindow(arr, n, k) {
    let max_sum = 0;

    for (let i = 0; i < k; i++) {
        max_sum += arr[i];
    }

    let window_sum = max_sum;

    for (let i = k; i < n; i++) {
        window_sum = window_sum - arr[i - k] + arr[i];
        max_sum = Math.max(max_sum, window_sum);
    }

    return max_sum;
}

// Time Complexity -> O(n)
// Space Complexity -> O(1)



const arr = [100, 200, 300, 400];
const n = arr.length;
const k = 2;

console.log(maxSumUsingSlidingWindow(arr, n, k));