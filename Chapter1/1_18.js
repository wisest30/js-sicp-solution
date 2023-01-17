function double(x) {
    return x + x
}

function halve(x) {
    return x / 2
}

function is_even(x) {
    return x % 2 === 0
}

function fast_times_iter(a, b, c) {
    return b === 0 ?  c : is_even(b) ? fast_times_iter(double(a), halve(b), c) : fast_times_iter(a, b - 1, c + a)
}

function fast_times(a, b) {
    return fast_times_iter(a, b, 0)
}

