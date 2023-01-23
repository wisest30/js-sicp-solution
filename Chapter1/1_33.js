function filtered_accumulate(filter, combiner, null_value, term, a, next, b) {
    return a > b
        ? null_value
        : filter(a)
        ? combiner(filtered_accumulate(filter, combiner, null_value, term, next(a), next, b), term(a))
        : filtered_accumulate(filter, combiner, null_value, term, next(a), next, b)
}

function is_prime(x) {
    function iter(a) {
        return a * a > x
            ? true
            : x % a == 0
            ? false
            : iter(inc(a))
    }

    return x < 2
        ? false
        : iter(2)
}

function sum(a, b) {
    return a + b
}

function square(x) {
    return x * x
}

function inc(x) {
    return x + 1
}

function prime_square_sum(a, b) {
    return filtered_accumulate(is_prime, sum, 0, square, a, inc, b)
}

function identity(x) {
    return x
}

function coprime_sum(n) {
    function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b)
    }
    function is_coprime(x) {
        return gcd(n, x) == 1
    }
    return filtered_accumulate(is_coprime, sum, 0, identity, 1, inc, n-1)
}
