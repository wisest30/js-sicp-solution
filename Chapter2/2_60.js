function is_element_of_set(x, set) {
    return is_null(set) 
           ? false
           : equal(x, head(set))
           ? true
           : is_element_of_set(x, tail(set));
}

function adjoin_set(x, set) {
    return pair(x, set);
}

function intersection_set(set1, set2) {
    return is_null(set1) || is_null(set2)
           ? null
           : is_element_of_set(head(set1), set2)
           ? pair(head(set1), intersection_set(tail(set1), set2))
           : intersection_set(tail(set1), set2);
}

function union_set(set1, set2) {
    return is_null(set1)
           ? set2
           : is_element_of_set(head(set1), set2)
           ? union_set(tail(set1), set2)
           : pair(head(set1), union_set(tail(set1), set2));
}

// 중복을 허용하면 성능은 떨어진다.
