// 문제에서 '허용 오차'를 '퍼센트 허용 오차'로 생각해야할듯...

// 두 구간의 중심과 가산적 허용오차를 각각 {c0, w0}, {c1, w1}라고 하자.
// 첫번째 구간의 퍼센트 허용오차는 p0 = w0 / c0 * 100 이고, 두번째 구간의 퍼센트 허용오차는 p1 = w1 / c1 * 100 이다.
// 두 구간의 곱의 최소값은 c0 * c1 - w0 * c1 - c0 * w1 + w0 * w1이고,
// 최대값은 c0 * c1 + w0 * c1 + c0 * w1 + w0 * w1이다.
// l = c0 * c1 - w0 * c1 - c0 * w1 + w0 * w1, u = c0 * c1 + w0 * c1 + c0 * w1 + w0 * w1 이라고 하면,
// l 을 하계로 하고 u 를 상계로 하는 구간의 center는 (u + l) / 2이고,
// 퍼센트 허용오차(percent)는 (u - l) / 2 / center * 100 이므로,
// percent = (u - l) / (u + l) * 100 = (w0 * c1 + c0 * w1) / (c0 * c1 + w0 * w1) * 100 이다.
// p0 * p1 을 0으로 근사시키면
// percent = (c0 * w1 + c1 * w0) / (c0 * c1) * 100 
//         = w0 / c0 * 100 + w1 / c1 * 100
//         = p0 + p1
// 이다.
// 따라서 두 구간의 곱의 퍼센트 허용오차는 두 구간의 퍼센트 허용오차의 합과 같다.