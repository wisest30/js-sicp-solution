function segments_to_painter(segment_list) {
    return frame =>
        for_each(segment =>
                    draw_line(
                        frame_coord_map(frame)
                            (start_segment(segment)),
                        frame_coord_map(frame)
                            (end_segment(segment))),
                segment_list)
}

function border_painter() {
    seg1 = make_segment(make_vector(0, 0), make_vector(0, 1))
    seg2 = make_segment(make_vector(0, 1), make_vector(1, 1))
    seg3 = make_segment(make_vector(1, 1), make_vector(1, 0))
    seg4 = make_segment(make_vector(1, 0), make_vector(0, 0))
    segment_list = list(seg1, seg2, seg3, seg4)

    return segments_to_painter(segment_list)
}

function X_painter() {
    seg1 = make_segment(make_vector(0, 0), make_vector(1, 1))
    seg2 = make_segment(make_vector(1, 0), make_vector(0, 1))
    segment_list = list(seg1, seg2)

    return segments_to_painter(segment_list)
}

function Dia_painter() {
    seg1 = make_segment(make_vector(0.5, 0), make_vector(0, 0.5))
    seg2 = make_segment(make_vector(0, 0.5), make_vector(0.5, 1))
    seg3 = make_segment(make_vector(0.5, 1), make_vector(1, 0.5))
    seg4 = make_segment(make_vector(1, 0.5), make_vector(0.5, 0.5))
    segment_list = list(seg1, seg2, seg3, seg4)

    return segments_to_painter(segment_list)
}

function wave_painter() {
    // wave 는 그림만 있어서 좌표를 못 찾는다.
}
