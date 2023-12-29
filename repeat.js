function repeatString(string, n){
    let rptString = ""
    for(let i=1; i<=n; i++){
        rptString += string + " "
    }
    return rptString
}

console.log(repeatString("Hello", 10))