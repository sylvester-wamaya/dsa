function palindrome(string){
    let newString = string.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let palString = newString.split('').reverse().join('')
    return palString == newString
}

console.log(palindrome("Ra,ce,,car"))
