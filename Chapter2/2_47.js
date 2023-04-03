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

// list 로 구현하는 경우
function make_frame(origin, edge1, edge2) {
    return list(origin, edge1, edge2)
}

function origin_frame(f) {
    return head(f)
}

function edge1_frame(f) {
    return head(tail(f))
}

function edge2_frame(f) {
    return head(tail(tail(f)))
}

// pair 로 구현하는 경우
function make_frame(origin, edge1, edge2) {
    return pair(origin, pair(edge1, edge2))
}

function origin_frame(f) {
    return head(f)
}

function edge1_frame(f) {
    return head(tail(f))
}

function edge2_frame(f) {
    return tail(tail(f))
}

// edge2_frame 만 구현이 다르다.
