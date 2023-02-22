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

function list_ref(items, n) {
    return n === 0 ? head(items) : list_ref(tail(items), n - 1)
}

function length(items) {
    return items === null ? 0 : 1 + length(tail(items))
}

function append(list1, list2) {
    return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
}

function last_pair(items) {
    return tail(items) === null ? items : last_pair(tail(items))
}
