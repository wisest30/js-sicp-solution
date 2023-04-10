list("a", "b", "c") // ["a", ["b", ["c", null]]]
list(list("george")) // [[["george", null]], null]
tail(list(list("x1", "x2"), list("y1", "y2"))) // [["y1", ["y2", null]], null]
tail(head(list(list("x1", "x2"), list("y1", "y2")))) // ["x2", null]
member("red", list("blue", "shoes", "yellow", "socks")) // null
member("red", list("red", "shoes", "blue", "socks")) // ["red", ["shoes", ["blue", ["socks", null]]]]
