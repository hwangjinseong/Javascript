function fib(n) {
    if(n == 1 || n == 2) return 1;
    else return (fib(n-1) + fib(n-2));
}
function fibonacci(n) {
    var f = new Array(100).fill(0);
    let c = 0;
    f[1] = 1;
    f[2] = 1;
    if(n == 1 || n == 2) return 1;
    for(let i = 3; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
        c++;
    } 
    return c;
}

console.log(fib(30), fibonacci(30));