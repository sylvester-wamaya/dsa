def anagram(string1, string2)
    new_string1 = string1.to_s.downcase.gsub(/[^a-zA-Z0-9]/, '').chars.sort.join
    new_string2 = string2.downcase.gsub(/[^a-zA-Z0-9]/, '').chars.sort.join
    new_string1 == new_string2
end

puts anagram("dom", "mdo")