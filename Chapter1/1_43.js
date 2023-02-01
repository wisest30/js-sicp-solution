function compose(f, g) {
    return x => f(g(x))
}

function repeated(f, n) {
    return n == 1 ? x => f(x) : compose(f, repeated(f, n - 1))
}

function square(x) {
    return x * x
}

function inc(x) {
    return x + 1
}

console.log(repeated(square, 2)(5)) // 625
console.log(repeated(inc, 2)(5)) // 7
