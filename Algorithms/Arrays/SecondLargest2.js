// Find Second Largest Element in Array (approch 2)
/**
 *  Algorithm ->
 *  1. Traverse the array with largest and secondlargest as -1
 *  2. if a[i]>largest then secondlargest as largest and largest as arr[i]
 *  3. else if arr[i]<largest and arr[i]>secondlargest then secondlargest = arr[i]
 */


function findSecondLargest2(arr) {
    let largest = -1, secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}


const arr = [5, 100, 0, -1, 3, 102, 7];
console.log(findSecondLargest2(arr));


// Time Complexity -> O(n)
// Space Complexity -> O(1)