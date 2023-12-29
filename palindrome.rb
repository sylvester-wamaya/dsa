def palindrome string
    string = string.to_s.downcase.gsub(/[^a-zA-Z0-9]/, '')
    palindrome = string.reverse
    return palindrome == string
end

puts palindrome 111111