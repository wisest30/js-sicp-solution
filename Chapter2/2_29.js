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

function make_mobile(left, right) {
    return list(left, right)
}

function make_branch(length, structure) {
    return list(length, structure)
}

function left_branch(mobile) {
    return head(mobile)
}

function right_branch(mobile) {
    return head(tail(mobile))
}

function branch_length(branch) {
    return head(branch)
}

function branch_structure(branch) {
    return head(tail(branch))
}

function total_weight(mobile) {
    return !is_pair(mobile) ? mobile : total_weight(branch_structure(left_branch(mobile))) + total_weight(branch_structure(right_branch(mobile)))
}

function is_balanced(mobile) {
    function branch_weight(branch) {
        return branch_length(branch) * total_weight(branch_structure(branch))
    }
    return !is_pair(mobile) ? true : branch_weight(left_branch(mobile)) === branch_weight(right_branch(mobile)) && is_balanced(branch_structure(left_branch(mobile))) && is_balanced(branch_structure(right_branch(mobile)))
}

// d. 이 새 표현에 맞게 프로그램을 얼마나 변경해야 할까?
// right_branch, branch_structure 에서 head 호출 지우면 된다.
