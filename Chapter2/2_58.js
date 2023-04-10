// a. 중위 표기법
function make_sum(a1, a2) {
    return number_equal(a1, 0)
           ? a2
           : number_equal(a2, 0)
           ? a1
           : is_number(a1) && is_number(a2)
           ? a1 + a2
           : list(a1, "+", a2);
}
function make_product(m1, m2) {
    return number_equal(m1, 0) || number_equal(m2, 0)
           ? 0
           : number_equal(m1, 1)
           ? m2
           : number_equal(m2, 1)
           ? m1
           : is_number(m1) && is_number(m2)
           ? m1 * m2
           : list(m1, "*", m2);
}
function is_sum(x) { return is_pair(x) && is_pair(tail(x)) && head(tail(x)) === "+"; }
function addend(s) { return head(s); }
function augend(s) { return head(tail(tail(s))); }
function is_product(x) { return is_pair(x) && is_pair(tail(x)) && head(x) === "*"; }
function multiplier(s) { return head(s); }
function multiplicand(s) { return head(tail(tail(s))); }

function deriv(exp, variable) {
    return is_number(exp)
           ? 0
           : is_variable(exp)
           ? is_same_variable(exp, variable) ? 1 : 0
           : is_sum(exp)
           ? make_sum(deriv(addend(exp), variable),
                      deriv(augend(exp), variable))
           : is_product(exp)
           ? make_sum(make_product(multiplier(exp),
                                   deriv(multiplicand(exp),
                                         variable)),
                      make_product(deriv(multiplier(exp),
                                         variable),
                                   multiplicand(exp)))
           : error(exp, "unknown expression type -- deriv");
}

// b. 곱셈 우선순위
// 우선순위가 낮은 '+' 가 있는지 먼저 list 에서 검색해서 있으면 left 와 right 로 분리하고 재귀로 처리.
// '+' 가 없으면 기존 로직처럼 처리.
// 코드 너무 길어서 skip
