function anagram(word1, word2) {
    let newWord1 = word1.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split("").reverse().join("")
    let newWord2 = word2.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

    return (newWord1 === newWord2)



}

console.log(anagram("Car", "rac"))