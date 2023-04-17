function union_set_tree(set1, set2) {
    return list_to_tree(union_set(tree_to_list_2(set1), tree_to_list_2(set2)))
}

function intersection_set_tree(set1, set2) {
    return list_to_tree(intersection_set(tree_to_list_2(set1), tree_to_list_2(set2)))
}
