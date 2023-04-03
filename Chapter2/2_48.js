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

function make_vector(x, y) {
    return pair(x, y)
}

function xcor_vect(v) {
    return head(v)
}

function ycor_vect(v) {
    return tail(v)
}

function make_segment(start_vec, end_vec) {
    return pair(start_vec, end_vec)
}

function start_segment(s) {
    return head(s)
}

function end_segment(s) {
    return tail(s)
}
