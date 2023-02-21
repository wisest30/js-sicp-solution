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

function make_center_percent(c, p) {
    return pair(c, p)
}

function center(i) {
    return head(i)
}

function percent(i) {
    return tail(i)
}

function lower_bound(i) {
    return center(i) * (100 - percent(i)) / 100
}

function upper_bound(i) {
    return center(i) * (100 + percent(i)) / 100
}
