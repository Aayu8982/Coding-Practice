// Find all pairs with a given sum in two unsorted arrays (Native Approch)





// Approch1 (Native Approch)
function findPairFromTwoUnsortedArray1(arr1, arr2, target) {
    let pairs = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] + arr2[j] == target) {
                pairs.push(`[${arr1[i]}, ${arr2[j]}]`)
            }
        }
    }
    return pairs.length > 0 ? pairs : -1
}


const arr1 = [-1, -2, 4, -6, 5, 7];
const arr2 = [6, 3, 4, 0];
const target = 8;
console.log(findPairFromTwoUnsortedArray1(arr1, arr2, target));


// Time Complexity -> O(n^2)
// Space Complexity -> O(1)