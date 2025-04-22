// Selection Sort

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

function printArray(arr) {
    for (let val of arr) {
        process.stdout.write(val + " ")
    }
    console.log();
}

const arr = [5, 6, 2, 34, 24, 2, 30, 9, 44, 60];
selectionSort(arr)
printArray(arr);


// Time Complexity -> O(n^2)
// Space Complexity ->O(1)