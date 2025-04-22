// Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;
    let flag = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
            if (flag == 0)
                break;
        }
    }
}

function printArray(arr) {
    for (let val of arr) {
        process.stdout.write(val + " ");
    }
    console.log();
}

const arr = [10, 8, 3, 2, 70, 13];
bubbleSort(arr);
printArray(arr);

// Time Complexity -> O(n^2)
// Space Complexity -> O(1)