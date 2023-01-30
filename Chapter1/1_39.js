// e = 2.718281828459045…
// e - 2 = 0.718281828459045…

function cont_frac(n, d, k) {
    function recur(remain) {
        const i = k - remain + 1
        return remain == 1 ? n(i) / d(i) : n(i) / (d(i) + recur(remain - 1))
    }
    return recur(k)
}

function tan_cf(x, k) {
    return cont_frac(i => i == 1 ? x : -x * x, i => 2 * i - 1, k)
}

console.log(tan_cf(0, 100)) // 0
console.log(tan_cf(Math.PI / 6, 100)) // 0.5773502691896257
console.log(tan_cf(Math.PI / 4, 100)) // 1
console.log(tan_cf(Math.PI / 3, 100)) // 1.732050807568877
console.log(tan_cf(Math.PI / 2, 100)) // Infinity

console.log(Math.tan(0)) // 0
console.log(Math.tan(Math.PI / 6)) // 0.5773502691896257
console.log(Math.tan(Math.PI / 4)) // 0.9999999999999999
console.log(Math.tan(Math.PI / 3)) // 1.7320508075688767
console.log(Math.tan(Math.PI / 2)) // 16331239353195370
