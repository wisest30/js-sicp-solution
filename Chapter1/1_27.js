function expmod(base, exp, m) {
    return exp === 0 ? 1 : exp % 2 == 0 ?expmod(base, exp / 2, m) ** 2 % m : (base * expmod(base, exp - 1, m)) % m
}

function isCarmichaelNumberIter(n, a) {
    return n === a ? true : expmod(a, n, n) === a ? isCarmichaelNumberIter(n, a + 1) : false
}

function isCarmichaelNumber(n) {
    return isCarmichaelNumberIter(n, 1)
}

console.log(isCarmichaelNumber(561)) // true
console.log(isCarmichaelNumber(1105)) // true
console.log(isCarmichaelNumber(1729)) // true
console.log(isCarmichaelNumber(2465)) // true
console.log(isCarmichaelNumber(2821)) // true
console.log(isCarmichaelNumber(6601)) // true
