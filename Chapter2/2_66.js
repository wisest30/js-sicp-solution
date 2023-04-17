function lookup(given_key, set_of_records) {
    return is_null(set_of_records)
           ? false
           : equal(given_key, key(entry(set_of_records)))
           ? entry(set_of_records)
           : given_key < key(entry(set_of_records))
           ? lookup(given_key, left_branch(set_of_records))
           : lookup(given_key, right_branch(set_of_records));
}
