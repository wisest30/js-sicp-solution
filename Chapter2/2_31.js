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

function square(x) {
    return x * x
}

function tree_map(fun, tree) {
    if (tree === null) {
        return null
    } else if (is_pair(tree)) {
        return pair(tree_map(fun, head(tree)), tree_map(fun, tail(tree)))
    } else {
        return fun(tree)
    }
}

function square_tree(tree) {
    return tree_map(square, tree)
}

t = list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9))
print(t) // [[1, [2, [3, null]]], [[4, [5, [6, null]]], [[7, [8, [9, null]]], null]]]
print(square_tree(t)) // [[1, [4, [9, null]]], [[16, [25, [36, null]]], [[49, [64, [81, null]]], null]]]
