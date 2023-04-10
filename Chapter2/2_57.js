function augend(s) { 
    if (is_null(tail(tail(tail(s)))))
        return head(tail(tail(s)));
    else
        return pair("+", tail(tail(s)))
}

function multiplicand(s) {
    if (is_null(tail(tail(tail(s)))))
        return head(tail(tail(s)));
    else
        return pair("*", tail(tail(s)))
}
