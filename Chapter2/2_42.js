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

function inc(x) {
    return x + 1
}

function is_pair(x) {
    return x && typeof x === 'function' && x.length === 1
}

function is_null(x) {
    return x === null
}

function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y), null, sequence)
}

function accumulate(op, initial, sequence) {
    return is_null(sequence) ? initial : op(head(sequence), accumulate(op, initial, tail(sequence)))
}

function append(list1, list2) {
    return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
}

function flatmap(f, seq) {
    return accumulate(append, null, map(f, seq))
}

function enumerate_interval(low, high) {
    return low > high ? null : pair(low, enumerate_interval(low + 1, high))
}

function filter(pred, seq) {
    return accumulate((x, y) => pred(x) ? pair(x, y) : y, null, seq)
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

function queens(board_size) {
    function queen_cols(k) {
        return k === 0
            ? list(empty_board) 
            : filter(positions => is_safe(k, positions),
                        flatmap(rest_of_queens => 
                                map(new_row => 
                                    adjoin_position(new_row, k,
                                        rest_of_queens), enumerate_interval(1, board_size)),
                                queen_cols(k - 1)))
    }

    return queen_cols(board_size)
}

empty_board = null // 교재에선 함수로 작성하라고 되어 있는데 내가 쓰는 list 는 arg 로 함수를 입력받지 않는다.

function adjoin_position(new_row, k, rest_of_queens) {
    return pair(pair(new_row, k), rest_of_queens)
}

function is_safe(k, positions) {
    if(is_null(positions)) {
        return true
    } else if(!is_safe(k, tail(positions))) {
        return false
    } else {
        pos = head(positions)

        function is_attack(pos, positions) {
            if(is_null(positions)) {
                return false
            } else {
                pos2 = head(positions)
                return head(pos) === head(pos2) ||
                    tail(pos) === tail(pos2) ||
                    head(pos) + tail(pos) === head(pos2) + tail(pos2) ||
                    head(pos) - tail(pos) === head(pos2) - tail(pos2) ||
                    is_attack(pos, tail(positions))
            }
        }

        return !is_attack(pos, tail(positions))
    }
}

print(queens(0)) // [null, null]

// queens(0) 일 때 뒤에 null 이 하나 더 들어가서 head 를 사용
print(head(queens(1))) // [[1, 1], null]
print(queens(2)) // null
print(queens(3)) // null
print(head(queens(4))) // [[3, 4], [[1, 3], [[4, 2], [[2, 1], null]]]]
