// 1 / 황금비 : 0.61803398...

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

console.log(cont_frac(i => 1, i => 1, 9)) // 0.6181818181818182
console.log(cont_frac(i => 1, i => 1, 10)) // 0.6179775280898876
console.log(cont_frac(i => 1, i => 1, 11)) // 0.6180555555555556
console.log(cont_frac(i => 1, i => 1, 12)) // 0.6180257510729613
console.log(cont_frac(i => 1, i => 1, 13)) // 0.6180371352785146

console.log(cont_frac_iter(i => 1, i => 1, 9)) // 0.6181818181818182
console.log(cont_frac_iter(i => 1, i => 1, 10)) // 0.6179775280898876
console.log(cont_frac_iter(i => 1, i => 1, 11)) // 0.6180555555555556
console.log(cont_frac_iter(i => 1, i => 1, 12)) // 0.6180257510729613
console.log(cont_frac_iter(i => 1, i => 1, 13)) // 0.6180371352785146

// k 가 11일 때부터 소수점 이하 네 자리까지 정확하다.
