function is_element_of_set(x, set) {
    return is_null(set) 
           ? false
           : x === head(set)
           ? true
           : x < head(set)
           ? false
           : // x > head(set) 
             is_element_of_set(x, tail(set));
}

function intersection_set(set1, set2) {
    if (is_null(set1) || is_null(set2)) {
        return null;
    } else {
        const x1 = head(set1);
        const x2 = head(set2);
        return x1 === x2
               ? pair(x1, intersection_set(tail(set1), tail(set2)))
               : x1 < x2 
               ? intersection_set(tail(set1), set2)
               : // x2 < x1
	             intersection_set(set1, tail(set2));
    }
}

function adjoin_set(x, set) {
    return is_null(set)
            ? list(x)
            : x === head(set)
            ? set
            : x < head(set)
            ? pair(x, set)
            : pair(head(set), adjoin_set(x, tail(set)));
}

function union_set(set1, set2) {
    return is_null(set1)
           ? set2
           : is_null(set2)
           ? set1
           : head(set1) === head(set2)
           ? pair(head(set1), union_set(tail(set1), tail(set2)))
           : head(set1) < head(set2)
           ? pair(head(set1), union_set(tail(set1), set2))
           : pair(head(set2), union_set(set1, tail(set2)));
}
