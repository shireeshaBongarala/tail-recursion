function recursiveFactorial(n) {
    if( n=== 0) {
        return 0;
    }
    return n + recursiveFactorial(n-1);
}


function factorialWithIteration(n) {
    var fact = 1;
    for( var i =1 ; i<= n ; i++) {
        fact = fact * i;
        console.log( i, fact);
    }
    return fact;
}

function fact(n) {
    return tailRecursiveFact(n, 0);

}

function tailRecursiveFact(n, i) {
    if( n=== 0) return i;
    return tailRecursiveFact(n-1, n+i);
}

function fibIterRecursive(n, a, b){
    if (n === 0) {
        return b;
    } else {
        return fibIterRecursive(n-1, a + b, a);
    }
}

function fibWithTailcallOptimization(n){
    return fibIterRecursive(n, 1, 0);
}

function fib(n) {
    if (n <= 1){
        return n;
    } else {
      console.log("processing  ----", n);
        return fib(n-1) + fib(n - 2);
    }
}


function sumToNWithRecursion(n) {
  if(n<=1) return n;
    return n + sumToNWithRecursion(n-1);
}

function sumToNWithTailRecursion(n) {
    if(n<=1) return n;

    return innerTailRecursion(0, n);
}

function innerTailRecursion(sum, n) {
    if (n <= 0) return sum;
    return innerTailRecursion(sum + n , n -1);
}

function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}