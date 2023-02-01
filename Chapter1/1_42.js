function compose(f, g) {
    return x => f(g(x))
}

function square(x) {
    return x * x
}

function inc(x) {
    return x + 1
}

console.log(compose(square, inc)(6)) // 49

