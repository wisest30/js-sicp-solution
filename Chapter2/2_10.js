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

function add_interval(a, b) {
    return make_interval(lower_bound(a) + lower_bound(b), upper_bound(a) + upper_bound(b))
}

function mul_interval(a, b) {
    var p1 = lower_bound(a) * lower_bound(b)
    var p2 = lower_bound(a) * upper_bound(b)
    var p3 = upper_bound(a) * lower_bound(b)
    var p4 = upper_bound(a) * upper_bound(b)
    return make_interval(Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4))
}

function div_interval(a, b) {
    if (lower_bound(b) <= 0 && upper_bound(b) >= 0) {
        console.log("error : divide by zero")
        return make_interval(NaN, NaN)
    }

    return mul_interval(a, make_interval(1 / upper_bound(b), 1 / lower_bound(b)))
}
