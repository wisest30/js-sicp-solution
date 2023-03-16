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

function is_pair(x) {
    return x && typeof x === 'function' && x.length === 1
}

function append(list1, list2) {
    return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
}

function reverse(items) {
    if (items === null) {
        return null
    } else {
        return append(reverse(tail(items)), list(head(items)))
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

function deep_reverse(items) {
    if (items === null) {
        return null
    } else if (!is_pair(items)) {
        return items
    } else {
        return append(deep_reverse(tail(items)), list(deep_reverse(head(items))))
    }
}

const x = list(list(1, 2), list(3, 4))
print(x) // [[1, [2, null]], [[3, [4, null]], null]]

print(reverse(x)) // [[3, [4, null]], [[1, [2, null]], null]]

print(deep_reverse(x)) // [[4, [3, null]], [[2, [1, null]], null]]

