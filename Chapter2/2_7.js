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

function make_interval(x, y) { 
    return pair(x, y)
}

function lower_bound(interval) {
    return head(interval)
}

function upper_bound(interval) {
    return tail(interval)
}
