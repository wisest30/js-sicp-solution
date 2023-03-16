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

a = list(1, 3, list(5, 7), 9)
console.log(head(tail(head(tail(tail(a)))))) // 7

b = list(list(7))
console.log(head(head(b))) // 7

c = list(1, list(2, list(3, list(4, list(5, list(6, 7))))))
console.log(head(tail(head(tail(head(tail(head(tail(head(tail(head(tail(c))))))))))))) // 7
