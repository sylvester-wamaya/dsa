def recursion(n, total = 0)
    if n <= 0
        return total
    end
    return recursion(n - 1, total + n)
end

puts recursion(4)
