const _Node = require('./node')

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(stack) {
        const node = stack.top;
        console.log('top of stack', node.data)
        return node.data
    }

    isEmpty(stack) {
        const node = stack.top;
        if (stack.top === null) {
            console.log('stack is empty')
        }
        else {
            console.log('stack is not empty')
        }
    }

    display(stack) {
        let current = stack.top;

        while(current.next !== null){
            current = current.next
        }

        if(current.next == null)[
            console.log('first item', current.data)
        ]
    }
}

module.exports = Stack