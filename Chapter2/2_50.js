function transform_painter(painter, origin, corner1, corner2) {
    return frame => {
        const m = frame_coord_map(frame)
        const new_origin = m(origin)
        return painter(make_frame(new_origin, sub_vector(m(corner1), new_origin), sub_vector(m(corner2), new_origin)))
    }
}

function flip_vert(painter) {
    return transform_painter(painter, make_vector(0, 1), make_vector(1, 1), make_vector(0, 0))
}

function flip_horiz(painter) {
    return transform_painter(painter, make_vector(1, 0), make_vector(0, 0), make_vector(1, 1))
}

function rotate180(painter) {
    return flip_horiz(flip_vert(painter))
}

function rotate270(painter) {
    return flip_horiz(transform_painter(painter, make_vector(0, 0), make_vector(0, 1), make_vector(1, 0)))
}
