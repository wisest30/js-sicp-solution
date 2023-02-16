// 두 구간 a, b가 있다고 하자.
// a의 너비는 (lower_bound(a) + upper_bound(a)) / 2 이고, b의 너비는 (lower_bound(b) + upper_bound(b)) / 2 이다.
// a의 너비와 b의 너비를 합하고 2로 나눈 값은 
// (lower_bound(a) + upper_bound(a) + lower_bound(b) + upper_bound(b)) / 2 이다. -- 식 (1)
// 두 구간 a, b의 합은 하계가 (lower_bound(a) + lower_bound(b))이고, 상계가 (upper_bound(a) + upper_bound(b))이다.
// 따라서 두 구간 a, b의 합의 너비는 
// (lower_bound(a) + lower_bound(b) + upper_bound(a) + upper_bound(b)) / 2 이다. -- 식 (2)
// 식 (1)과 식 (2)는 같다.
