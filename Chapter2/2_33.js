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

function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y), null, sequence)
}

function append(seq1, seq2) {
    return accumulate((x, y) => pair(x, y), seq2, seq1)
}

function length(sequence) {
    return accumulate((x, y) => y + 1, 0, sequence)
}
