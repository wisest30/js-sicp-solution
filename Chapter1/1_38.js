// e = 2.718281828459045…
// e - 2 = 0.718281828459045…

function cont_frac(n, d, k) {
    function recur(remain) {
        const i = k - remain + 1
        return remain == 1 ? n(i) / d(i) : n(i) / (d(i) + recur(remain - 1))
    }
    return recur(k)
}

function cont_frac_iter(n, d, k) {
    function iter(remain, res) {
        return remain == 0 ? res : iter(remain - 1, n(remain) / (d(remain) + res))
    }
    return iter(k, 0)
}

// d(i) : 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8
console.log(cont_frac(i => 1, i => i % 3 == 2 ? (1 + Math.floor(i / 3)) * 2 : 1, 100)) // 0.7182818284590453
console.log(cont_frac_iter(i => 1, i => i % 3 == 2 ? (1 + Math.floor(i / 3)) * 2 : 1, 100)) // 0.7182818284590453

