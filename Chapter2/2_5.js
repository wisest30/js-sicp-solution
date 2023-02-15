// 2와 3은 서로소이므로, return 값을 다시 2와 3의 거듭제곱으로 표현하면 x와 y를 구할 수 있다.
function pair(x, y) {
    return 2 ** x * 3 ** y
}

function head(z) {
    if (z % 2 === 0) {
        return head(z / 2) + 1
    } else {
        return 0
    }
}

function tail(z) {
    if (z % 3 === 0) {
        return tail(z / 3) + 1
    } else {
        return 0
    }
}
