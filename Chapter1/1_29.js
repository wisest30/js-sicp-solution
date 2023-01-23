function cube(x) {
    return x * x * x
}

function sum(term, a, next, b) {
    return a > b ? 0 : term(a) + sum(term, next(a), next, b)
}

function integral(f, a, b, dx) {
    function add_dx(x) {
        return x + dx
    }
    return sum(f, a + dx / 2, add_dx, b) * dx
}

console.log(integral(cube, 0, 1, 0.01)) // 0.24998750000000042
console.log(integral(cube, 0, 1, 0.001)) // 0.249999875000001

function simpson(f, a, b, n) {
    function h(a, b) {
        return (b - a) / n
    }
    function inc(x) {
        return x + 1
    }
    function g(i) {
        function xi(i) {
            return a + i * h(a, b)
        }

        return f(xi(i)) * (i == 0 ? 1 : i == n ? 1 : i % 2 == 1 ? 4 : 2)
    }

    return sum(g, 0, inc, n) * h(a, b) / 3
}

console.log(simpson(cube, 0, 1, 100)) // 0.24999999999999992
console.log(simpson(cube, 0, 1, 1000)) // 0.2500000000000003
