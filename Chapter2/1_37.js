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

function is_pair(x) {
    return x && typeof x === 'function' && x.length === 1
}

function is_null(x) {
    return x === null
}

function plus(x, y) {
    return x + y
}

function times(x, y) {
    return x * y
}

function list() {
    if(arguments.length === 0) {
        return null
    } else {
        return pair(arguments[0], list.apply(null, Array.prototype.slice.call(arguments, 1)))
    }
}

function accumulate(op, initial, sequence) {
    return is_null(sequence) ? initial : op(head(sequence), accumulate(op, initial, tail(sequence)))
}

function accumulate_n(op, init, seqs) {
    return is_null(head(seqs))
           ? null
           : pair(accumulate(op, init, map(x => head(x), seqs)), accumulate_n(op, init, map(x => tail(x), seqs)))
}

function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y), null, sequence)
}

function dot_product(v, w) {
    return accumulate(plus, 0, accumulate_n(times, 1, list(v, w)))
}

function matrix_times_vector(m, v) {
    return map(x => dot_product(x, v), m)
}

function transpose(mat) {
    return accumulate_n(pair, null, mat)
}

function matrix_times_matrix(n, m) {
    const cols = transpose(m)
    return map(x => matrix_times_vector(cols, x), n)
}
