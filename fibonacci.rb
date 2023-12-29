def fibonacci n
    sum = 2
   arr = [1,1]
    for i in 1..n
        fib = arr[arr.length-1] + arr[arr.length-2] 
        if fib < n
            arr.push(fib)
                if fib % 2 != 0
                    sum += fib
                end
        end
       
    end
    
   return arr, sum
end

    puts fibonacci( 10 )