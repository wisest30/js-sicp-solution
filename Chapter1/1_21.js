function square(x) {
    return x * x
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
            ? n
            : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, test_divisor + 1);
}

function divides(a, b) {
    return b % a === 0
}

console.log(smallest_divisor(199)) // 199
console.log(smallest_divisor(1999)) // 1999
console.log(smallest_divisor(19999)) // 7
