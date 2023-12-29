class Stack{
    constructor(){
        this.items = []
    }

    push(data){
        this.items.push(data)
    }
    pop(){
        if(this.items.length === 0){
            return "Stack is Empty"
        }
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    min(){
        let sortedItems = this.items.sort()
        return sortedItems[0]

    }

    printStack(){
        let str = ""
        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + " "
        }
        return str
    }
}

let x = new Stack

x.push(3)
x.push(1)
x.push(2)

console.log(x.min(), x.printStack())


