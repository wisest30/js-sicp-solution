function f(i, j) {
    return i < j ? 0 : i === 0 ? 1 : j === 0 ? 1 : f(i - 1, j - 1) + f(i - 1, j)
}
