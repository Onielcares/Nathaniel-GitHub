// This covers Linear search and binary search and recursive algorithm

// Linear Search

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 5))
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 10))
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 15))

// complexity is O(n) - Line 6 is a loop hence O(n)

// Binary Search

//  Binary search only works on a sorted array
// You have to find the Middle Element to get the index it serves as a comparism

function binarySearch(arr, val) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === val ? middle : -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 15))

