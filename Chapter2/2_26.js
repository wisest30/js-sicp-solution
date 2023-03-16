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

function append(list1, list2) {
    return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
}

const x = list(1, 2, 3)
const y = list(4, 5, 6)

append(x, y) 
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// [1, [2, [3, [4, [5, [6, null]]]]]]

pair(x, y)
// . -> 1 -> 2 -> 3 -> null
// |
// 4 -> 5 -> 6 -> null
//
// [[1, [2, [3, null]]], [4, [5, [6, null]]]]

list(x, y)
// . -> 1 -> 2 -> 3 -> null
// |
// . -> 4 -> 5 -> 6 -> null
// |
// null
//
// [[1, [2, [3, null]]], [[4, [5, [6, null]]]], null]
