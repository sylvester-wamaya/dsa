class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }

}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    printAll(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }

    append(data){
        let newNode = new Node(data)
        if( this.head === null){
            this.head = newNode
            return
        } 

        let current = this.head
        while(current.next !== null){
            current = current.next
        }

        current.next = newNode

    }

    addAtPosition(data, psn){
        let newNode = new Node(data)
       if(psn === 1){
        newNode.next = this.head
        this.head = newNode
        return;
       }

       let current = this.head
       let i = 1
       while(i < psn - 1 && current){
        current = current.next
        i++
       }
       if(current){
        newNode.next = current.next
        current.next = newNode
       }
    }

    remove(data){
        if(!this.head){
            return null
        }
        if(this.head.data === data){
            this.head = this.head.next
            this.length--
            return this;
        }

        let current = this.head
        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next
                this.length--
                return this;
            }
            current = current.next
        }
        return null
        
    }
    removeAtIndex(index){
        if(index < 0 || index > this.length){
            return null
        }
        if(index === 0){
            return this.remove()
        }
        let current =  this.head
        for(let i =0; i<index-1; i++){
            current = current.next
        }
        current.next = current.next.next
        this.length--
        return this
    }

    get(index) {
 
        let current = this.head
        let count = 0
        while(current){
          if(count == index){
            return current.value
          }
          count++
          current = current.next
        }
        return null
      }
}

let list = new LinkedList()
list.append(9)
list.append(10)
list.printAll()
list.addAtPosition("Node",2)
list.printAll()
list.remove("Node")
list.printAll()