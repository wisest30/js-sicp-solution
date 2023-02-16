const one = f => x => f(x)
const two = f => x => f(f(x))

function plus(a, b) {
    return f => x => f(a(f)(b(f)(x)))
}
