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

function accumulate_iter(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b ? result : iter(next(a), combiner(term(a), result))
    }
    return iter(a, null_value)
}

function sum_iter(term, a, next, b) {
    function combiner(a, b) {
        return a + b
    }
    return accumulate_iter(combiner, 0, term, a, next, b)
}

function product_iter(term, a, next, b) {
    function combiner(a, b) {
        return a * b
    }
    return accumulate_iter(combiner, 1, term, a, next, b)
}
