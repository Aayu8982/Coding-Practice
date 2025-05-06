// Two pass 
function seprate012(arr) {
    let zero = 0;
    let one = 0;
    let two = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero++;
        } else if (arr[i] === 1) {
            one++;
        } else {
            two++;
        }
    }

    let count = 0;

    for (let i = 0; i < zero; i++) {
        arr[count++] = 0;
    }
    for (let i = 0; i < one; i++) {
        arr[count++] = 1;
    }
    for (let i = 0; i < two; i++) {
        arr[count++] = 2
    }

    return arr;
}

// Time Complexity -> O(2 * n)
// Space Complexity -> O(1)


// Dutch National Flag Algorithm





let arr = [2, 1, 0, 2, 1, 0, 1];
console.log(seprate012(arr));