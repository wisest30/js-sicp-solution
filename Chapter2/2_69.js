function successive_merge(leaves) {
    return is_null(leaves)
           ? null
           : is_null(tail(leaves))
           ? head(leaves)
           : successive_merge(
                adjoin_set(
                    make_code_tree(head(leaves), head(tail(leaves))),
                    tail(tail(leaves))));
}
