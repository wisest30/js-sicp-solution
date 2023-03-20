function pair(x, y) {
    function dispatch(m) {
        return m === 0 ? x : m === 1 ? y : error(m, "Argument not 0 or 1 -- pair")
    }
    return dispatch
}

function head(z) {
    return z(0)
}

function tail(z) {
    return z(1)
}

function is_null(x) {
    return x === null
}

function accumulate(op, initial, sequence) {
    return is_null(sequence) ? initial : op(head(sequence), accumulate(op, initial, tail(sequence)))
}

function list() {
    if(arguments.length === 0) {
        return null
    } else {
        return pair(arguments[0], list.apply(null, Array.prototype.slice.call(arguments, 1)))
    }
}

function horner_eval(x, coefficient_sequence) {
    return accumulate((this_coeff, higher_terms) => x * higher_terms + this_coeff,
        0,
        coefficient_sequence)
}

console.log(horner_eval(2, list(1, 3, 0, 5, 0, 1)))
