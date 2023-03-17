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

function tree_square(tree) {
    if (tree === null) {
        return null
    } else if (is_pair(tree)) {
        return pair(tree_square(head(tree)), tree_square(tail(tree)))
    } else {
        return tree * tree
    }
}


function map(fun, items) {
    return items === null ? null : pair(fun(head(items)), map(fun, tail(items)))
}

function tree_square_map(tree) {
    function fun(x) {
        return is_pair(x) ? tree_square_map(x) : x * x
    }

    return map(fun, tree)
}

tree = list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9))
print(tree) // [[1, [2, [3, null]]], [[4, [5, [6, null]]], [[7, [8, [9, null]]], null]]]
print(tree_square(tree)) // [[1, [4, [9, null]]], [[16, [25, [36, null]]], [[49, [64, [81, null]]], null]]]
print(tree_square_map(tree)) // [[1, [4, [9, null]]], [[16, [25, [36, null]]], [[49, [64, [81, null]]], null]]]
