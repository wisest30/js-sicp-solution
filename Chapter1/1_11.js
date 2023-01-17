function f(n) {
    return n < 3 ? n : f(n-1) + 2 * f(n-2) + 3 * f(n-3)
}

function f_iter(a, b, c, count) {
    return count == 0 ? c : f_iter(a + 2 * b + 3 * c, a, b, count - 1)
}

function f2(n) {
    return f_iter(2, 1, 0, n)
}
