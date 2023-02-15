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

// 직사각형을 만드는 함수
function make_rectangle(point, width, height) {
    const opposite = make_point(x_point(point) + width, y_point(point) + height);
    return make_segment(point, opposite);
}

function width_rectangle(rectangle) {
    return x_point(end_segment(rectangle)) - x_point(start_segment(rectangle));
}

function height_rectangle(rectangle) {
    return y_point(end_segment(rectangle)) - y_point(start_segment(rectangle));
}

function area_rectangle(rectangle) {
    return width_rectangle(rectangle) * height_rectangle(rectangle);
}

function perimeter_rectangle(rectangle) {
    return 2 * (width_rectangle(rectangle) + height_rectangle(rectangle));
}
