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

function list() {
    if(arguments.length === 0) {
        return null
    } else {
        return pair(arguments[0], list.apply(null, Array.prototype.slice.call(arguments, 1)))
    }
}

function inc(x) {
    return x + 1
}

function is_pair(x) {
    return x && typeof x === 'function' && x.length === 1
}

function is_null(x) {
    return x === null
}

function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y), null, sequence)
}

function accumulate(op, initial, sequence) {
    return is_null(sequence) ? initial : op(head(sequence), accumulate(op, initial, tail(sequence)))
}

function append(list1, list2) {
    return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
}

function flatmap(f, seq) {
    return accumulate(append, null, map(f, seq))
}

function enumerate_interval(low, high) {
    return low > high ? null : pair(low, enumerate_interval(low + 1, high))
}

function is_prime(x) {
    function iter(a) {
        return a * a > x
            ? true
            : x % a == 0
            ? false
            : iter(inc(a))
    }

    return x < 2
        ? false
        : iter(2)
}

function is_prime_sum(pair) {
    return is_prime(head(pair) + head(tail(pair)))
}

function filter(pred, seq) {
    return accumulate((x, y) => pred(x) ? pair(x, y) : y, null, seq)
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

function unique_pairs(n) {
    return flatmap(x => map(y => list(x, y), enumerate_interval(x + 1, n)), enumerate_interval(1, n))
}

print(enumerate_interval(1, 6)) // [1, [2, [3, [4, [5, [6, null]]]]]]
print(unique_pairs(6)) // [[1, [2, null]], [[1, [3, null]], [[1, [4, null]], [[1, [5, null]], [[1, [6, null]], [[2, [3, null]], [[2, [4, null]], [[2, [5, null]], [[2, [6, null]], [[3, [4, null]], [[3, [5, null]], [[3, [6, null]], [[4, [5, null]], [[4, [6, null]], [[5, [6, null]], null]]]]]]]]]]]]]]]

function prime_sum_pairs(n) {
    return filter(x => is_prime_sum(x), unique_pairs(n))
}

print(prime_sum_pairs(6)) // [[1, [2, null]], [[1, [4, null]], [[1, [6, null]], [[2, [3, null]], [[2, [5, null]], [[3, [4, null]], [[5, [6, null]], null]]]]]]]


