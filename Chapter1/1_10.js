function A(x, y) {
    return y === 0 ? 0 : x === 0 ? 2 * y : y === 1 ? 2 : A(x - 1, A(x, y - 1))
}

console.log(A(1, 10)) // 1024
console.log(A(2, 4)) // 65536
console.log(A(3, 3)) // 65536

// 2n
function f(n) {
    return A(0, n)
}

// 2^n
function g(n) {
    return A(1, n)
}

// 2^h(n-1)
function h(n) {
    return A(2, n)
}

// 5n^2
function k(n) {
    return 5 * n * n
}

console.log(h(1))
console.log(h(2))
console.log(h(3))
console.log(h(4))
console.log(h(5))

