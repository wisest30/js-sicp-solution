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

function rotate90(painter) {
    return flip_vert(transform_painter(painter, make_vector(1, 0), make_vector(1, 1), make_vector(0, 0)))
}

function rotate180(painter) {
    return flip_horiz(flip_vert(painter))
}

function rotate270(painter) {
    return flip_horiz(transform_painter(painter, make_vector(0, 0), make_vector(0, 1), make_vector(1, 0)))
}

function beside(painter1, painter2) {
    const split_point = make_vect(0.5, 0)
    const paint_left = transform_painter(painter1, make_vector(0, 0), split_point, make_vector(0, 1))
    const paint_right = transform_painter(painter2, split_point, make_vector(1, 0), make_vector(0.5, 1))

    return frame => {
        paint_left(frame)
        paint_right(frame)
    }
}

function below(painter1, painter2) {
    const split_point = make_vect(0, 0.5)
    const paint_top = transform_painter(painter2, split_point, make_vector(1, 0), make_vector(0, 0.5))
    const paint_bottom = transform_painter(painter1, make_vector(0, 0), make_vector(1, 0), split_point)

    return frame => {
        paint_top(frame)
        paint_bottom(frame)
    }
}

function below2(painter1, painter2) {
    return rotate270(beside(rotate90(painter2), rotate90(paiter1)))
}
