// Every recursion solution has to have a base case

function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(2))
console.log(recursiveFibonacci(4))
console.log(recursiveFibonacci(8))
console.log(recursiveFibonacci(16))

// recursive value is o(2^n) - Line 7 is recursive function hence O(2^n).

// recursive Factorial of a number.

function recursiveFactorial(n) {
    if (n === 1) {
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(4))
console.log(recursiveFactorial(6))
console.log(recursiveFactorial(10))

// recursive value is o(n) - Line 23 is recursive function hence O(n).

function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(4))
console.log(recursiveFactorial(6))
console.log(recursiveFactorial(10))

// recursive value is o(n) - Line 23 is recursive function hence O(n).