function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(5))

// Big O Notation. Math Algorithm. 1st Maths Algorithm.

function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(9))
console.log(fibonacci(10))

n = [0, 1]
m = [0, 1, 1]
d = n + m
console.log(d)

// Big O Notation.
// O(n) - Linear Time Complexity. Line 14 is for loop hence O(n).

// Big O Notation. 2nd Maths Algorithm. Factorial of a number.

function factorial(n) {
    let fact = 1
    for (let i = 2; i <= n; i++) {
        fact *= i
    }
    return fact
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(7))

// Big O Notation.
// O(n) - Linear Time Complexity. Line 43 is for loop hence O(n).

// Big O Notation. 3rd Maths Algorithm. Prime Number.

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(100))