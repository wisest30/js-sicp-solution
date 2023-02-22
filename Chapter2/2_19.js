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

function reverse(items) {
    if (items === null) {
        return null
    } else {
        return append(reverse(tail(items)), list(head(items)))
    }
}

function cc(amount, coin_values) {
    return amount === 0 ? 1 : amount < 0 || coin_values === null ? 0 : cc(amount, except_first_denomination(coin_values)) + cc(amount - first_denomination(coin_values), coin_values)
}

function first_denomination(coin_values) {
    return head(coin_values)
}

function except_first_denomination(coin_values) {
    return tail(coin_values)
}

// coin_values 목록에 있는 요소들의 순서가 달라져도 경우의 수는 변하지 않는다.
