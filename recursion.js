function recursion(n, total = 0){
    if(n<=0){
        return total
    }
    
    return recursion(n-1, total+n)
}

console.log(recursion(4))