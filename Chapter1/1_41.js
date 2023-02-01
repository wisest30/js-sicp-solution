function inc(x) {
    return x + 1
}

function double(f) {
    return x => f(f(x))
}

ans = double(double(double))(inc)(5);
console.log(ans) // 21
