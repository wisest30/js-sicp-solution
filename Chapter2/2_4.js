function pair(x, y) {
    return m => m(x, y)
}

function head(z) {
    return z((p, q) => p)
}

function tail(z) {
    return z((p, q) => q)
}

let p = pair(5, 3);
console.log(head(p)); // 5
console.log(tail(p)); // 3
