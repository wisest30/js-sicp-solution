function pair(x, y) {
    function dispatch(m) {
        return m === 0 ? x : m === 1 ? y : error(m, "Argument not 0 or 1 -- pair")
    }
    return dispatch
}

function head(z) {
    return z(0);
}

function tail(z) {
    return z(1);
}

function make_segment(start, end) {
    return pair(start, end);
}

function start_segment(segment) {
    return head(segment);
}

function end_segment(segment) {
    return tail(segment);
}

function make_point(x, y) {
    return pair(x, y);
}

function x_point(point) {
    return head(point);
}

function y_point(point) {
    return tail(point);
}

function midpoint_segment(segment) {
    const x = (x_point(start_segment(segment)) + x_point(end_segment(segment))) / 2;
    const y = (y_point(start_segment(segment)) + y_point(end_segment(segment))) / 2;
    return make_point(x, y);
}

function display(x) {
    console.log(x);
}

function print_point(point) {
    display("(" + x_point(point) + ", " + y_point(point) + ")");
}

let p0 = make_point(5, 5);
let p1 = make_point(10, 10);
let s0 = make_segment(p0, p1);
let mid_point = midpoint_segment(s0);
print_point(mid_point);
