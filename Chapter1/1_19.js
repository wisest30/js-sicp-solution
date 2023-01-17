// {{p + q, q}, {q, p}} ^ n , {a, b}
function fib(n) {
    return fib_iter(1, 0, 0, 1, n)
}

function is_even(x) {
    return x % 2 === 0
}

function fib_iter(a, b, p, q, count) {
    return count === 0
           ? b
           : is_even(count)
           ? fib_iter(a, b, p * p + q * q, (p + q) * q + p * q, count / 2)
           : fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, count - 1)
}

