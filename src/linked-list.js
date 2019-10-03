const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node()
        this._tail = new Node()
        this.length = 0
    }

    append(data) {
        if (this.length == 0) {
            this._head = new Node(data, null, null)
            this._tail = new Node(data, null, null)
        }
        else {
            //move from start to end and add new
            let temp = this._head
            while (temp.next != null) temp = temp.next
            temp.next = new Node(data, temp, null)

            this._tail = temp.next
        }

        this.length ++
        return this
    }

    head() {
        return this._head.data
    }

    tail() {
        return this._tail.data
    }

    at(index) {

        let temp = this._head
        let i = 0
        while (i != index) {
            temp = temp.next
            i++
        }

        return temp.data


    }

    insertAt(index, data) {

        if (index == 0) {
            //replace node and delete one
            this._head = new Node(data, null, this._head)
            this._head.next.prev = this._head
        }
        else 
        {
            let temp = this._head
            let i = 0
            while (i != index) {
                temp = temp.next
                i++
            }

            temp.prev.next = new Node(data, temp.prev, temp.prev.next)
            temp.prev = temp.prev.next
        }

        this.length++
        return this
    }

    isEmpty() {
        if (this.length > 0) return false
        return true 
    }

    clear() {
        this._head = new Node()
        this._tail = new Node()
        this.length = 0
        return this
    }

    deleteAt(index) {
        if (this.length <=1) return this.clear()
        else {
            let temp = this._head
            let i = 0
            while (i != index) {
                temp = temp.next
                i++
            }
            temp.prev.next = temp.next
            temp.next.prev = temp.prev

            this.length--
            return this
        }
    }

    reverse() {
        let temp = this._head
        this._tail = this._head
        for (let i = 0 ; i < this.length -1; i++) {
            temp = temp.next
            temp.prev.next = temp.prev.prev
            temp.prev.prev = temp
        }

        temp.next = temp.prev
        temp.prev = null
        this._head = temp
        return this
    }

    indexOf(data) {
        let temp = this._head
        let i = 0
        while (i!=this.length) {
            if (temp.data == data) return i
            else {
                temp = temp.next
                i++
            }
        }

        return -1
    }
}

module.exports = LinkedList;
