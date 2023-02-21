function pair(x, y) {
    function dispatch(m) {
        return m === 0 ? x : m === 1 ? y : error(m, "Argument not 0 or 1 -- pair")
    }
    return dispatch
}

function head(z) {
    return z(0)
}

function tail(z) {
    return z(1)
}

function make_interval(x, y) { 
    return pair(x, y)
}

function lower_bound(interval) {
    return head(interval)
}

function upper_bound(interval) {
    return tail(interval)
}

function add_interval(a, b) {
    return make_interval(lower_bound(a) + lower_bound(b), upper_bound(a) + upper_bound(b))
}

function mul_interval(a, b) {
    if (lower_bound(a) >= 0 && lower_bound(b) >= 0) // (+, +) (+, +)
        return make_interval(lower_bound(a) * lower_bound(b), upper_bound(a) * upper_bound(b))
    if (lower_bound(a) >= 0 && upper_bound(b) < 0) // (+, +) (-, -)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * lower_bound(b))
    if (lower_bound(a) >= 0 && lower_bound(b) < 0) // (+, +) (-, +)
        return make_interval(upper_bound(a) * lower_bound(b), upper_bound(a) * upper_bound(b))
    if (upper_bound(a) < 0 && lower_bound(b) >= 0)// (-, -) (+, +)
        return make_interval(lower_bound(a) * upper_bound(b), upper_bound(a) * lower_bound(b))
    if (upper_bound(a) < 0 && upper_bound(b) < 0) // (-, -) (-, -)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * lower_bound(b))
    if (upper_bound(a) < 0 && lower_bound(b) < 0) // (-, -) (-, +)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * lower_bound(b))
    if (lower_bound(a) < 0 && lower_bound(b) >= 0) // (-, +) (+, +)
        return make_interval(lower_bound(a) * upper_bound(b), upper_bound(a) * upper_bound(b))
    if (lower_bound(a) < 0 && upper_bound(b) < 0) // (-, +) (-, -)
        return make_interval(upper_bound(a) * upper_bound(b), lower_bound(a) * upper_bound(b))
    if (lower_bound(a) < 0 && lower_bound(b) < 0) // (-, +) (-, +) : 곱하기가 4번인 경우.
        return make_interval(Math.min(lower_bound(a) * upper_bound(b), upper_bound(a) * lower_bound(b)),
            Math.max(lower_bound(a) * lower_bound(b), upper_bound(a) * upper_bound(b)))
}

function div_interval(a, b) {
    if (lower_bound(b) <= 0 && upper_bound(b) >= 0) {
        console.log("error : divide by zero")
        return make_interval(NaN, NaN)
    }

    return mul_interval(a, make_interval(1 / upper_bound(b), 1 / lower_bound(b)))
}

function make_center_percent(c, p) {
    return make_interval(c * (100 - p) / 100, c * (100 + p) / 100)
}

function par1(r1, r2) {
    return div_interval(mul_interval(r1, r2), add_interval(r1, r2))
}

function par2(r1, r2) {
    const one = make_interval(1, 1)
    return div_interval(one, add_interval(div_interval(one, r1), div_interval(one, r2)))
}

// 퍼센트 허용 오차가 클 때
let r1 = make_center_percent(100, 30)
let r2 = make_center_percent(200, 30)
let p1 = par1(r1, r2)
let p2 = par2(r1, r2)
console.log(lower_bound(p1) + ' ~ ' + upper_bound(p1)) // 25.128205128205128 ~ 160.95238095238096
console.log(lower_bound(p2) + ' ~ ' + upper_bound(p2)) // 46.666666666666664 ~ 86.66666666666666

// 퍼센트 허용 오차가 작을 때
r1 = make_center_percent(100, 0.1)
r2 = make_center_percent(200, 0.1)
p1 = par1(r1, r2)
p2 = par2(r1, r2)
console.log(lower_bound(p1) + ' ~ ' + upper_bound(p1)) // 66.4669330669331 ~ 66.8669336002669
console.log(lower_bound(p2) + ' ~ ' + upper_bound(p2)) // 66.6 ~ 66.73333333333333

// A/A A/B 계산
r1 = make_center_percent(100, 30)
r2 = make_center_percent(200, 30)
p1 = div_interval(r1, r1)
p2 = div_interval(r1, r2)
console.log(lower_bound(p1) + ' ~ ' + upper_bound(p1)) // 0.5384615384615385 ~ 1.857142857142857 
console.log(lower_bound(p2) + ' ~ ' + upper_bound(p2)) // 0.2692307692307693 ~ 0.9285714285714285

r1 = make_center_percent(100, 0.1)
r2 = make_center_percent(200, 0.1)
p1 = div_interval(r1, r1)
p2 = div_interval(r1, r2)
console.log(lower_bound(p1) + ' ~ ' + upper_bound(p1)) // 0.9980019980019981 ~ 1.002002002002002    
console.log(lower_bound(p2) + ' ~ ' + upper_bound(p2)) // 0.49900099900099903 ~ 0.501001001001001
