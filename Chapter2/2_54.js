function equal(a, b) {
    if(is_pair(a) != is_pair(b))
        return false
    else if (is_pair(a))
        return equal(head(a), head(b)) && equal(tail(a), tail(b));
    else
        return a === b
}
