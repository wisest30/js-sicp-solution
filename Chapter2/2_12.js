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

function make_center_percent(c, p) {
    return make_interval(c * (100 - p) / 100, c * (100 + p) / 100)
}

function center(interval) {
    return (lower_bound(interval) + upper_bound(interval)) / 2
}

function percent(interval) {
    return (upper_bound(interval) - lower_bound(interval)) / 2 / center(i) * 100
}
