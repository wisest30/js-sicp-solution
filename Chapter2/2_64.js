// 1. list(1, 3, 5, 7, 9, 11) 가 들어온 경우
// 세 구간으로 나누어서 재귀 호출을 이용한다.
// list(1, 3) 을 재귀로 처리(left_result)
// 5 는 this_entry
// list(7, 9, 11) 을 재귀로 처리(right_result)
// 각 구간의 결과를 tree 로 만들어서 리턴

// 2. 시간 복잡도는 O(n) 이다.
