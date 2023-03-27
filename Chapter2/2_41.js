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

function triple_pairs(n) {
    return flatmap(
        x => flatmap(
            y => map(
                z => list(x, y, z),
                enumerate_interval(1, n)
            ),
            enumerate_interval(1, n)
        ),
        enumerate_interval(1, n)
    )
}

function is_same(x, y) {
    return x === y
}

function diff_triple(x, y, z) {
    return !is_same(x, y) && !is_same(x, z) && !is_same(y, z)
}

print(filter(x => diff_triple(head(x), head(tail(x)), head(tail(tail(x)))), triple_pairs(4)))
// [[1, [2, [3, null]]], [[1, [2, [4, null]]], [[1, [3, [2, null]]], [[1, [3, [4, null]]], [[1, [4, [2, null]]], [[1, [4, [3, null]]], [[2, [1, [3, null]]], [[2, [1, [4, null]]], [[2, [3, [1, null]]], [[2, [3, [4, null]]], [[2, [4, [1, null]]], [[2, [4, [3, null]]], [[3, [1, [2, null]]], [[3, [1, [4, null]]], [[3, [2, [1, null]]], [[3, [2, [4, null]]], [[3, [4, [1, null]]], [[3, [4, [2, null]]], [[4, [1, [2, null]]], [[4, [1, [3, null]]], [[4, [2, [1, null]]], [[4, [2, [3, null]]], [[4, [3, [1, null]]], [[4, [3, [2, null]]], null]]]]]]]]]]]]]]]]]]]]]]]]

function triples_same_with(s, n) {
    seq = filter(x => diff_triple(head(x), head(tail(x)), head(tail(tail(x)))), triple_pairs(n))
    return filter(x => is_same(s, head(x) +  head(tail(x)) + head(tail(tail(x)))), seq)
}

print(triples_same_with(6, 4))
// [[1, [2, [3, null]]], [[1, [3, [2, null]]], [[2, [1, [3, null]]], [[2, [3, [1, null]]], [[3, [1, [2, null]]], [[3, [2, [1, null]]], null]]]]]]
