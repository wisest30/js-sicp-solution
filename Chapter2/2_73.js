// a. is_number 일 때와 is_variable 일 때는 미분 연산 방법이 정해져 있기 때문에 따로 처리하지 않아도 된다.

// b.
function derive_sum(operands, variable) {
    return make_sum(
        derive(car(operands), variable),
        derive(cdr(operands), variable));
}

function derive_product(operands, variable) {
    return make_sum(
        make_product(multiplier(operands),
                     derive(multiplicand(operands), variable)),
        make_product(derive(multiplier(operands), variable),
                    multiplicand(operands)));
}

function install_derive() {
    put("deriv", "+", derive_sum);
    put("deriv", "*", derive_product);
}

// c.
function derive_exponents(operands, variable) {
    return make_product(
        make_product(exponent(operands),
                     make_exponent(base(operands),
                                   make_sum(exponent(operands),
                                            -1))),
        derive(base(operands), variable));
}

function install_derive_exponents() {
    put("deriv", "^", derive_exponents);
}

// d. put 함수 관련 부분들도 수정해야한다.
