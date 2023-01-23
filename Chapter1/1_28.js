function expmod(base, exp, m) {
    return exp === 0 ? 1 : exp % 2 === 0 ? expmod(base, exp / 2, m) ** 2 % m : base * expmod(base, exp - 1, m) % m
}

function isModOne(x) {
    return x === 1
}

function isModMinusOne(x, n) {
    return x === n - 1
}

function isModAbsOne(x, n) {
    return isModOne(x) ? 0 : isModMinusOne(x, n) ? 0 : x
}

function toStop(x, n) {
    return x === 0 ? 0 : x === n - 1 ? 0 : x
}

function testIter(a, exp, n) {
    return exp % 2 === 1 ? isModAbsOne(expmod(a, exp, n), n) : toStop(testIter(a, exp / 2, n), n) ** 2 % n 
}

function millerRabinTest(n, a) {
    return n % a === 0 ? false : testIter(a, n-1, n) === 0
}

function isPrimeNormal(n, d) {
    return n === d ? true : n % d === 0 ? false : isPrimeNormal(n, d + 1) 
}

function isPrime(n) {
    // n < 4,759,123,141 일 경우  a={2,7,61}에 대해서만 검사해보면 충분하다
    return n < 2 ? false : n < 62 ? isPrimeNormal(n, 2) : millerRabinTest(n, 2) === false ? false : millerRabinTest(n, 7) === false ? false : millerRabinTest(n, 61) === false ? false : true
}

// Test
for (i = 2; i < 1009; i++) {
    if(isPrime(i))
        console.log(i)
     if(isPrime(i) != isPrimeNormal(i, 2))
        console.log("error" + i)
}
/*
출력 결과 : 
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113
127
131
137
139
149
151
157
163
167
173
179
181
191
193
197
199
211
223
227
229
233
239
241
251
257
263
269
271
277
281
283
293
307
311
313
317
331
337
347
349
353
359
367
373
379
383
389
397
401
409
419
421
431
433
439
443
449
457
461
463
467
479
487
491
499
503
509
521
523
541
547
557
563
569
571
577
587
593
599
601
607
613
617
619
631
641
643
647
653
659
661
673
677
683
691
701
709
719
727
733
739
743
751
757
761
769
773
787
797
809
811
821
823
827
829
839
853
857
859
863
877
881
883
887
907
911
919
929
937
941
947
953
967
971
977
983
991
997
*/
