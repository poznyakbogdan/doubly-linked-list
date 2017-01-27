const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var appendElem = new Node(data, null, null)
        console.log(appendElem.data)
        if (this.length > 0){
            this._tail.next = appendElem;
            appendElem.prev = this._tail;
            this._tail = appendElem;
        }else{
            this._head = appendElem;
            this._tail = appendElem;
        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var count = 0;
        var currentElem = this._head;
        if (index > this.length || index < 0){
            throw new Error("invalid index");
        }

        while (count < index){
            currentElem = currentElem.next;
            count++;
        }
        return currentElem.data;
    }

    insertAt(index, data) {
        //var insertNode = new Node(data, null, null);
        var currentNode = this._head;
        var count = 0;
        
        while (count < index){
            currentNode = currentNode.next;
            count++;
        }

        currentNode.data = data;
    }

    isEmpty() {
        if (this.length == 0){
            return true;
        }else return false;
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var currentNode = this._head;
        var count = 0;

        while (count < index){
            currentNode = currentNode.next;
            count++;
        }

        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
    }

    reverse() {
        if(this.length <= 1) {

        }else {
            var temp = this._head;
            this._head = this._tail;
            this._tail = temp;
            var p = this._head;
            while (p != null) {
                temp = p.next;
                p.next = p.prev;
                p.prev = temp;
                p = p.next;
            }
        }

    }

    indexOf(data) {
        var count = 0;
        var currentElem = this._head;
        while (count < this.length){
            if (currentElem.data == data ){
                return count;
            }
            currentElem = currentElem.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;
