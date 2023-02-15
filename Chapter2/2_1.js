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

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function abs(x) {
    return x > 0 ? x : x === 0 ? 0 : - x
}

function make_rat(n, d) {
    const g = gcd(abs(n), abs(d));

    if (d < 0) {
        return pair(-n / g, -d / g);
    } else {
        return pair(n / g, d / g);
    }
}
