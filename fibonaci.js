function fibonacci(n){
    let fib = [1,1,]
    let sum = 2

    for (let i=2;i<=n;i++){
        let fab = fib[fib.length-1] + fib[fib.length-2]
        if(fab < n){
            fib.push(fab)
            if(fab % 2 != 0){
                sum += fab
            }
        }
       
        
    }

return sum
}

console.log(fibonacci(10))