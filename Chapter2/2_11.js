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
    if (lower_bound(a) >= 0 && lower_bound(b) >= 0) // (+, +) (+, +)
        return make_interval(lower_bound(a) * lower_bound(b), upper_bound(a) * upper_bound(b))
    if (lower_bound(a) >= 0 && upper_bound(b) < 0) // (+, +) (-, -)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * lower_bound(b))
    if (lower_bound(a) >= 0 && lower_bound(b) < 0) // (+, +) (-, +)
        return make_interval(upper_bound(a) * lower_bound(b), upper_bound(a) * upper_bound(b))
    if (upper_bound(a) < 0 && lower_bound(b) >= 0)// (-, -) (+, +)
        return make_interval(lower_bound(a) * upper_bound(b), upper_bound(a) * lower_bound(b))
    if (upper_bound(a) < 0 && upper_bound(b) < 0) // (-, -) (-, -)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * lower_bound(b))
    if (upper_bound(a) < 0 && lower_bound(b) < 0) // (-, -) (-, +)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * lower_bound(b))
    if (lower_bound(a) < 0 && lower_bound(b) >= 0) // (-, +) (+, +)
        return make_interval(lower_bound(a) * upper_bound(b), upper_bound(a) * upper_bound(b))
    if (lower_bound(a) < 0 && upper_bound(b) < 0) // (-, +) (-, -)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * upper_bound(b))
    if (lower_bound(a) < 0 && lower_bound(b) < 0) // (-, +) (-, +) : 곱하기가 4번인 경우.
        return make_interval(Math.min(lower_bound(a) * upper_bound(b), upper_bound(a) * lower_bound(b)),
            Math.max(lower_bound(a) * lower_bound(b), upper_bound(a) * upper_bound(b)))
}

// 번역이 잘못된듯. 2.11에서는 두 구간의 곱을 구하는 함수를 만들어야 한다.
