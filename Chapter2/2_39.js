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

function divide(x, y) {
    return x / y
}

function list() {
    if(arguments.length === 0) {
        return null
    } else {
        return pair(arguments[0], list.apply(null, Array.prototype.slice.call(arguments, 1)))
    }
}

function append(list1, list2) {
    return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
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

function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y), null, sequence)
}

function accumulate(op, initial, sequence) {
    return is_null(sequence) ? initial : op(head(sequence), accumulate(op, initial, tail(sequence)))
}

fold_right = accumulate

function fold_left(op, initial, sequence) {
    function iter(result, rest) {
        return is_null(rest)
               ? result
               : iter(op(result, head(rest)), tail(rest))
    }
    return iter(initial, sequence)
}

function reverse0(sequence) {
    return fold_right((x, y) => append(y, list(x)), null, sequence)
}

function reverse1(sequence) {
    return fold_left((x, y) => pair(y, x), null, sequence)
}

l = list(1, 2, 3)
print(l) // [1, [2, [3, null]]]
print(reverse0(l)) // [3, [2, [1, null]]]
print(reverse1(l)) // [3, [2, [1, null]]]



