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

function print_pair(p) {
    console.log('(' + head(p) + ', ' + tail(p) + ')')
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

function add_vect(v1, v2) {
    return make_vector(xcor_vect(v1) + xcor_vect(v2), ycor_vect(v1) + ycor_vect(v2))
}

function sub_vect(v1, v2) {
    return make_vector(xcor_vect(v1) - xcor_vect(v2), ycor_vect(v1) - ycor_vect(v2))
}

function scale_vect(s, v) {
    return make_vector(s * xcor_vect(v), s * ycor_vect(v))
}

// test
print_pair(add_vect(make_vector(0, 1), make_vector(3, 5))) // (3, 6)
print_pair(sub_vect(make_vector(0, 1), make_vector(3, 5))) // (-3, -4)
print_pair(scale_vect(5, make_vector(3, 5))) // (15, 25)
