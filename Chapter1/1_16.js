function is_even(n) {
    return n % 2 == 0
}

function square(n) {
    return n * n
}

function fast_expt_iter(b, n, product) {
    return n === 0 ? product : is_even(n) ? fast_expt_iter(b * b, n / 2, product) : fast_expt_iter(b, n - 1, product * b)
}

function f(b, n) {
    return fast_expt_iter(b, n, 1)
}

console.log(f(3, 4))
