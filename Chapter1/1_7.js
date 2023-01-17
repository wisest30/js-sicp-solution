// JavaScript의 숫자 타입은 IEEE 754-2008, 64 bit format을 따른다.
// 가수부가 52비트이므로 52비트 이내에 표현할 수 있는 범위가 유효자리수이다.(10진수로 치면 15자리정도..)
// 부호부: 1비트, 지수부: 11비트, 가수부: 52비트

function abs(x) {
    return x > 0 ? x : x === 0 ? 0 : - x
}

function square(x) {
    return x * x
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

function is_good_enough2(guess, x) {
    return abs(square(guess) - x) / abs(x) < 0.001;
}

function sqrt_iter2(guess, x) {
    return is_good_enough2(guess, x) ? guess : sqrt_iter2(improve(guess, x), x);
}

function sqrt2(x) {
    return sqrt_iter2(1, x);
}

var x = 0.01
var ans1 = sqrt(x)
var ans2 = sqrt2(x)

console.log(ans1 * ans1) // 0.01006526315785885
console.log(ans2 * ans2) // 0.01000010579156518

x = 100000000000
ans1 = sqrt(x)
ans2 = sqrt2(x)

console.log(ans1 * ans1) // 99999999999.99998
console.log(ans2 * ans2) // 100000694661.54349

// 작은 수일 때는 상대오차를 적용했을 때가 잘 작동하고 큰 수일 때는 절대오차를 적용했을 때가 잘 작동한다.
