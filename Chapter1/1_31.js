function product(term, a, next, b) {
    return a > b ? 1 : term(a) * product(term, next(a), next, b)
}

function identity(x) {
    return x
}

function inc(x) {
    return x + 1
}

function factorial(n) {
    return product(identity, 1, inc, n)
}

function quarter_pi(n) {
    function fraction(i) {
        return i == 1 ? 2 : i % 2 == 0 ? i + 2 : i + 1
    }
    function denominator(i) {
        return i % 2 == 1 ? i + 2 : i + 1
    }
    function f(i) {
        return fraction(i) / denominator(i)
    }
    return product(f, 1, inc, n)
}

function product_iter(term, a, next, b) {
    function iter(a, result) {
        return a > b ? result : iter(next(a), result * term(a))
    }

    return iter(a, 1)
}
