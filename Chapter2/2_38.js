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

console.log(fold_right(divide, 1, list(1, 2, 3))) // 1.5
console.log(fold_left(divide, 1, list(1, 2, 3))) // 0.166666...
print(fold_right(list, null, list(1, 2, 3))) // [1, [[2, [[3, [null, null]], null]], null]]
print(fold_left(list, null, list(1, 2, 3))) // [[[null, [1, null]], [2, null]], [3, null]]

// fold_left와 fold_right의 결과가 같으려면 op 가 연산 순서에 따라 결과가 달라지지 않아야한다.
