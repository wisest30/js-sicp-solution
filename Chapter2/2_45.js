const right_split = split(beside, below)
const up_split = split(below, beside)

function split(func1, func2) {
    return (painter, n) => {
        if (n === 0) {
            return painter
        } else {
            const smaller = split(func1, func2)(painter, n - 1)
            return func1(painter, func2(smaller, smaller))
        }
    }
}
