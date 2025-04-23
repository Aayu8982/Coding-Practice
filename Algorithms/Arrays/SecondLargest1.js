// Find Second Largest Element in Array (Approch 1)
/**
 *  Algorithm ->
 * 1. first iteration find the Largest element in array, initialize second largest as -1.
 * 2. second iteration find maximum element who found in 1st traversal
 */

function findSecondLargest1(arr) {
    let largest = -1, secondLargest = -1;

    // find largest element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    // find second largest
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const arr = [43, 54, 12, 80, 23];
console.log("Second Largest Element in Array is " + findSecondLargest1(arr));

// Time Complexity -> O(n)
// Space Complexity -> O(1)