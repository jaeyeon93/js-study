function fibonacci(n) {
    if (n < 2)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacci2(n) {
    return n < 2 ? n : fibonacci2(n-1) + fibonacci2(n-2);
}

let memo = [0,1];

function fibMemoization(n) {
    if (typeof memo[n] !== 'number')
        memo[n] = fibMemoization(n-1) + fibMemoization(n-2);
    return memo[n];
}
console.log(fibMemoization(5));