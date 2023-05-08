function make_from_real_imag(x, y) {
    function dispatch(op) {
        return op === "real_part"
               ? x
               : op === "imag_part"
               ? y
               : op === "magnitude"
               ? math_sqrt(square(x) + square(y))
               : op === "angle"
               ? math_atan(y, x)
               : error(op, "unknown op -- make_from_real_imag");
    }
    return dispatch;
}
    
function make_from_mag_ang(r, a) {
    function dispatch(op) {
        return op === "real_part"
               ? r * math_cos(a)
               : op === "imag_part"
               ? r * math_sin(a)
               : op === "magnitude"
               ? r
               : op === "angle"
               ? a
               : error(op, "unknown op -- make_from_real_imag");
    }
    return dispatch;
}
