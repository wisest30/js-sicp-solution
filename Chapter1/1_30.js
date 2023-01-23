function sum(term, a, next, b) {
    function iter(a, result) {
        return a > b ? result : iter(next(a), result + term(a))
    }

    return iter(a, 0)
}

