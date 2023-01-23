function accumulate(combiner, null_value, term, a, next, b) {
    return a > b
        ? null_value
        : combiner(accumulate(combiner, null_value, term, next(a), next, b), term(a))
}

function sum(term, a, next, b) {
    function combiner(a, b) {
        return a + b
    }
    return accumulate(combiner, 0, term, a, next, b)
}

function product(term, a, next, b) {
    function combiner(a, b) {
        return a * b
    }
    return accumulate(combiner, 1, term, a, next, b)
}
