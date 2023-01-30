function f(g) {
    return g(2)
}

console.log(f(f))
/*
/Users/harry/js-sicp-solution/Chapter1/1_34.js:2
    return g(2)
           ^

TypeError: g is not a function 
    at f (/Users/harry/js-sicp-solution/Chapter1/1_34.js:2:12)
    at f (/Users/harry/js-sicp-solution/Chapter1/1_34.js:2:12)
    at Object.<anonymous> (/Users/harry/js-sicp-solution/Chapter1/1_34.js:5:13)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/
