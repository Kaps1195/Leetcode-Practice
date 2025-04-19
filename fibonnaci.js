const arr = [];
function fib(num) {
    if(num < 2) {
        return num;
    } 
    else {
        return fib(num-1) + fib(num-2);
        
    }
}

function fibo(num) {
    for (let i = 0; i < num; i++) {
        console.log(fib(i));        
    }
}

// fibo(5)

// 0 1 1 2 3 5 

function fib1(n) {
    const res = [0,1];
    for (let i = 1; i < n; i++) {
        const num = res[i] + res[i-1];
        res.push(num);
        console.log(res);
    }
}

fib1(5);