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