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

function average(a, b) {
    return (a + b) / 2
}

function average_damp(f) {
    return x => average(x, f(x))
}

function compose(f, g) {
    return x => f(g(x))
}

function repeated(f, n) {
    return n == 1 ? x => f(x) : compose(f, repeated(f, n - 1))
}

function root_n(x, n, damp_n) {
    return fixed_point(repeated(average_damp, damp_n)(y => x / y ** (n - 1)), 1)
}

// 8 의 3제곱근 1번 감쇠
console.log(root_n(8, 3, 1)) // 1.9999981824788517

// 16 의 4제곱근 1번 감쇠
// console.log(root_n(16, 4, 1)) // RangeError: Maximum call stack size exceeded

// 16 의 4제곱근 2번 감쇠
console.log(root_n(16, 4, 2)) // 2.0000000000021965

// 64 의 6제곱근 2번 감쇠
console.log(root_n(64, 6, 2)) // 2.0000029334662086

// 256 의 8제곱근 2번 감쇠
// console.log(root_n(256, 8, 2)) // RangeError: Maximum call stack size exceeded

// 256 의 8제곱근 3번 감쇠
console.log(root_n(256, 8, 3)) // 2.0000000000039666

// 그냥 감으로 log(n) 번 감쇠하면 되는거 같다. 이유는 나도 모름.
function root_n_log_damp(x, n) {
    return root_n(x, n, Math.floor(Math.log2(n))) 
}

console.log(root_n_log_damp(256, 8)) // 2.0000000000039666
console.log(root_n_log_damp(123 ** 17, 17)) // 122.9999997981648
console.log(root_n_log_damp(123 ** 123, 123)) // 122.99999525965754
