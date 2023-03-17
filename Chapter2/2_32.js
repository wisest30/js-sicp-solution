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

function list() {
    if(arguments.length === 0) {
        return null
    } else {
        return pair(arguments[0], list.apply(null, Array.prototype.slice.call(arguments, 1)))
    }
}

function map(fun, items) {
    return items === null ? null : pair(fun(head(items)), map(fun, tail(items)))
}

function is_null(x) {
    return x === null
}

function is_pair(x) {
    return x && typeof x === 'function' && x.length === 1
}

function append(list1, list2) {
    return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
}

function print_iter(l) {
    if (l == null) {
        process.stdout.write('null')
    } else if (!is_pair(l)) {
        process.stdout.write("" + l)
    } else {
        process.stdout.write('[')
        print_iter(head(l))
        process.stdout.write(', ')
        print_iter(tail(l))
        process.stdout.write(']')
    }
}

function print(l) {
    print_iter(l)
    console.log()
}

function subsets(s) {
    if (is_null(s)) {
        return list(null)
    } else {
        const rest = subsets(tail(s))
        return append(rest, map(x => pair(head(s), x), rest))
    }
}

l = list(1, 2, 3)
print(l) // [1, [2, [3, null]]]

// [null, [[3, null], [[2, null], [[2, [3, null]], [[1, null], [[1, [3, null]], [[1, [2, null]], [[1, [2, [3, null]]], null]]]]]]]]
print(subsets(l)) 

// 설명
// 집합 {1, 2, 3} 의 모든 부분 집합을 구할 때
// 집합 {2, 3} 의 모든 부분 집합을 구하고 (집합 a)
// 집합 a에 있는 각 부분 집합에 1을 추가한 집합을 구하고 (집합 b)
// 집합 a와 집합 b를 합친 집합을 구한다.
// 집합 a 는 1이 없는 경우에 대한 모든 부분 집합이고 집합 b 는 1이 있는 경우에 대한 모든 부분 집합이다.


