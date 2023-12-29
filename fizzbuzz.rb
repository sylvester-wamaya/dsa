def fizzbuzz
 arr = []
for i in 1..100 do
    if i % 3 == 0 && i % 5 == 0
        arr.append("FizzBuzz")
        next
    end
    if i % 3 == 0
        arr.append("Fizz")
        next
    end
    if i % 5 == 0
        arr.append("Buzzzz")
        next
    end
    arr.append(i)
end
puts arr
end

fizzbuzz