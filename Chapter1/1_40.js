const tolerance = 0.00001
function abs(x) {
    return x > 0 ? x : -x
}

function fixed_point(f, first_guess) {    
    function close_enough(x, y) {
        return abs(x - y) < tolerance
    }
    function try_with(guess) {
        const next = f(guess)
        return close_enough(guess, next) ? next : try_with(next)
    }

    return try_with(first_guess)
}

const dx = 0.00001;
function derive(g) {
    return x=> (g(x + dx) - g(x)) / dx
}

function newton_transform(g) {
    return x => x - g(x) / derive(g)(x)
}

function newtons_method(g, guess) {
    return fixed_point(newton_transform(g), guess)
}

function cubic(a, b, c) {
    return x => x * x * x + a * x * x + b * x + c
}

console.log(newtons_method(cubic(0, 0, 0), 1)) // 0.000026531990291797187
console.log(newtons_method(cubic(1, 1, 1), 1)) // -0.9999999999997796
