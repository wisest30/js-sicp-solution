function right_split(painter, n) {
    if (n === 0) {
        return painter
    } else {
        const smaller = right_split(painter, n - 1)
        return beside(painter, below(smaller, smaller))
    }
}

function up_split(painter, n) {
    if (n === 0) {
        return painter
    } else {
        const smaller = up_split(painter, n - 1)
        return below(painter, beside(smaller, smaller))
    }
}
