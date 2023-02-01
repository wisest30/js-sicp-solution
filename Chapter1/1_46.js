function iterative_improve(close_enough, f) {
    function try_with(guess) {
        const next = f(guess)
        return close_enough(guess) ? next : try_with(next)
    }

    return try_with(1)
}

function abs(x) {
    return x > 0 ? x : x === 0 ? 0 : - x
}

function sqrt(x) {
    return iterative_improve(guess => abs(guess * guess - x) < 0.001, guess => (guess + x / guess) / 2)
}

function fixed_point(f) {
    return iterative_improve(x => abs(x - f(x)) < 0.00001, f)
}

console.log(sqrt(0.01)) // 0.10000052895642693
console.log(fixed_point(x => 1 + 1 / x)) // 1.6180327868852458
