function attach_tag(type_tag, contents) {
    return is_number(contents)
        ? pair("javascript_number", contents)
        : pair(type_tag, contents);
}
function type_tag(datum) {
    return is_number(contents)
           ? "javascript_number"
           : is_pair(datum)
           ? head(datum)
           : error(datum, "bad tagged datum -- type_tag");
}
function contents(datum) {
    return is_number(datum)
        ? datum
        : is_pair(datum)
        ? tail(datum)
        : error(datum, "bad tagged datum -- contents");
}
