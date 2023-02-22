function for_each(func, items) {
    if (items === null) {
        return true
    } else {
        func(head(items))
        return for_each(func, tail(items))
    }
}
