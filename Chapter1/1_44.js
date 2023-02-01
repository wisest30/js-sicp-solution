function compose(f, g) {
    return x => f(g(x))
}

function repeated(f, n) {
    return n == 1 ? x => f(x) : compose(f, repeated(f, n - 1))
}

const dx = 0.00001;
function smoothing(f) {
    return x => (f(x - dx) + f(x) + f(x + dx)) / 3
}

function smoothing_n(f, n) {
    return repeated(smoothing, n)(f)
}
