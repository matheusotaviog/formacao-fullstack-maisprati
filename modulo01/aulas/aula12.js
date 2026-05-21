// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.lenght = 0
//     }

//     insertFirst(value) {
//         let newNode = new Node(value)
//         newNode.next = this.head
//         this.head = newNode
//         this.lenght++
//     }

//     insertTail(value) {
//         let newNode = new Node(value)
//         if (!this.head) {
//             this.head = newNode
//         }
        
//         let actual = this.head
//         while (actual.next) {
//             actual = actual.next
//         }

//         actual.next = newNode
//         this.lenght++
//     }
// }

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.preview = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.lenght = 0
    }

    insertFirst(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode
        }

        this.lenght++
    }

    insertTail(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }

        this.lenght++
    }

    insertAt(index, value) {
        if(index < 0 || index > this.lenght) {
            throw new RangeError('Índice fora dos limites da lista.')
        }

        if (index === 0) insertFirst(value)
        
        if (index === this.lenght) this.insertTail(value)

        let actual = this.head
        for (let i = 0; i < index; i++) {
            actual = actual.next
        }

        let newNode = new Node(value)
        let previous = actual.previous

        previous.next = newNode
        newNode.previous = previous
        newNode.next = actual
        actual.previous = newNode
        
        this.lenght++
    }
}
