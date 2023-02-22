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

function map(fun, items) {
    return items === null ? null : pair(fun(head(items)), map(fun, tail(items)))
}

function square(x) {
    return x * x
}

function square_list(items) {
    return items === null ? null : pair(head(items) * head(items), square_list(tail(items)))
}

function square_list2(items) {
    return map(square, items)
}

console.log(head(tail(square_list(list(2, 4, 6))))) // 16
console.log(head(tail(square_list2(list(2, 4, 6))))) // 16
