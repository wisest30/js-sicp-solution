function square_list(items) {
    return items === null ? null : pair(head(items) * head(items), square_list(tail(items)))
}
