def repeat_string(str, num)
    string = ""
    num.times do
        string += str
    end

  return string
end

puts repeat_string("Hello ", 3)