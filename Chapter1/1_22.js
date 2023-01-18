function square(x) {
    return x * x
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
            ? n
            : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, test_divisor + 1);
}

function divides(a, b) {
    return b % a === 0
}

function is_prime(n) {
    return n === smallest_divisor(n)
}

function timed_prime_test(n) {
    display(n)
    return start_prime_test(n, get_time())
}

function start_prime_test(n, start_time) {
    return is_prime(n) ? report_prime(n, get_time() - start_time) : true
}

function report_prime(n, elapsed_time) {
    console.log(`n : ${n} time : ${elapsed_time}`)
}

function get_time() {
    return new Date().getTime()
}

function is_even(x) {
    return x % 2 === 0
}

function search_for_odd_primes(a, b) {
    start_prime_test(a, get_time())
    return a + 2 > b ? true : search_for_odd_primes(a + 2, b)
}

function search_for_primes(a, b) {
    return a > b ? true : is_even(a) ? search_for_odd_primes(a + 1, b) : search_for_odd_primes(a, b)   
}

search_for_primes(1000, 1100)
// n : 1009 time : 0
// n : 1013 time : 0
// n : 1019 time : 0
// ...

search_for_primes(100000, 100100)
// n : 100003 time : 0
// n : 100019 time : 0
// n : 100043 time : 0

search_for_primes(1000000, 1000100)
// n : 1000003 time : 0
// n : 1000033 time : 0
// n : 1000037 time : 0
