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