function balanced(str){
    let stack = []
    for(let i=0; i<str.length;i++){
        let x = str[i]

        if(x === "(" || x === "{" || x === "["){
            stack.push(x)
            continue
        }

        if(stack.length == 0){
            return false
        }

        let check;
        switch(x){
            case ')':
                check = stack.pop()
                if(check == "{" || check == "[")
                return false
                break;
            case ']': 
                check = stack.pop()
                if(check == "(" || check == "{")
                return false
                break;
            case '}': 
                check = stack.pop()
                if(check == "(" || check == "[")
                return false
                break;
        }
    }
    return (stack.length === 0)
}

console.log(balanced("()"))