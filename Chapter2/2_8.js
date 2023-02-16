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

// 첫째 구간의 최소값에서 둘째 구간의 최대값을 뺀 값을 하계로, 첫째 구간의 최대값에서 둘째 구간의 최소값을 뺀 값을 상계로 한다.
function sub_interval(a, b) {
    return make_interval(lower_bound(a) - upper_bound(b), upper_bound(a) - lower_bound(b))
}
