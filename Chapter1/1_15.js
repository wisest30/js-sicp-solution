function cube(x) {
    return x * x * x
}

var cnt = 0
function p(x) {
    cnt++
    return 3 * x - 4 * cube(x)
}

function abs(x) {
    return x > 0 ? x : x === 0 ? 0 : - x
}

function sine(angle) {
    return ! (abs(angle) > 0.1) 
           ? angle
           : p(sine(angle / 3))
}

console.log(sine(12.15)) // -0.39980345741334
console.log(cnt) // p가 몇번이나 적용되는가? : 5

// 시간 복잡도 : log(angle)
// 공간 복잡도 : log(angle)
