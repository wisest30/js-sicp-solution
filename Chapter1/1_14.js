function count_change(amount) {
    return cc(amount, 5);
}

function cc(amount, kindes_of_coins) {
    return amount === 0
            ? 1
            : amount < 0 || kindes_of_coins === 0
            ? 0
            : cc(amount, kindes_of_coins - 1) + cc(amount - first_denomination(kindes_of_coins), kindes_of_coins)
}

function first_denomination(kindes_of_coins) {
    return kindes_of_coins === 1 ? 1 :
            kindes_of_coins === 2 ? 5 :
            kindes_of_coins === 3 ? 10 :
            kindes_of_coins === 4 ? 25 :
            kindes_of_coins === 5 ? 50 :
            0
}
