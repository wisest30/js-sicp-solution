function abs(x) {
    return x > 0 ? x : x === 0 ? 0 : - x
}

function square(x) {
    return x * x
}

function cubic(x) {
    return x * x * x
}

function is_good_enough(guess, x) {
    return abs(cubic(guess) - x) < 0.001;
}

function improve(guess, x) {
    return (x / square(guess) + 2 * guess) / 3;
}

function sqrt3_iter(guess, x) {
    return is_good_enough(guess, x) ? guess : sqrt3_iter(improve(guess, x), x);
}

function sqr3(x) {
    return sqrt3_iter(1, x);
}

console.log(sqr3(8)) // 2.000004911675504
