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

function list() {
    if(arguments.length === 0) {
        return null
    } else {
        return pair(arguments[0], list.apply(null, Array.prototype.slice.call(arguments, 1)))
    }
}

function print_iter(l) {
    if (l == null) {
        process.stdout.write('null')
    } else if (!is_pair(l)) {
        process.stdout.write("" + l)
    } else {
        process.stdout.write('[')
        print_iter(head(l))
        process.stdout.write(', ')
        print_iter(tail(l))
        process.stdout.write(']')
    }
}

function print(l) {
    print_iter(l)
    console.log()
}

function accumulate(op, initial, sequence) {
    return is_null(sequence) ? initial : op(head(sequence), accumulate(op, initial, tail(sequence)))
}

function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y), null, sequence)
}

function accumulate_n(op, init, seqs) {
    return is_null(head(seqs))
           ? null
           : pair(accumulate(op, init, map(x => head(x), seqs)), accumulate_n(op, init, map(x => tail(x), seqs)))
}

s = list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9), list(10, 11, 12))
print(accumulate_n((x, y) => x + y, 0, s)) // [22, [26, [30, null]]]
