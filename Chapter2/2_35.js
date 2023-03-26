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
       
function count_leaves(t) {
    return accumulate((x, y) => x + y, 0, map(x => is_pair(x) ? count_leaves(x) : 1, t))
}
