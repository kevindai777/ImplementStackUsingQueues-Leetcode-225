//Objective is to design a stack using queues. We implement 4 methods: 'push', 'pop', 'peek', 'empty'
//'Push' will push a value into the queue
//'Pop' will pop a value out of the queue
//'Peek' will return the top value in the queue
//'Empty' will return if the queue is empty or not.


//Design of a stack using two queues

class Stack {
    constructor() {
        this.queue = []
        this.temp = []
    }

    push(x) {
        this.queue.push(x)
    }

    pop() {
        //'temp' will become [3,2,1], letting us pop '1' out first
        while (this.queue.length > 0) {
            this.temp.push(this.queue.shift())
        }

        let pop = this.temp.pop()

        while (this.temp.length > 0) {
            this.queue.push(this.temp.shift())
        }

        return pop
    }

    peek() {
        while (this.queue.length > 0) {
            this.temp.push(this.queue.shift())
        }

        let pop = this.temp.pop()
        this.temp.push(pop)

        while (this.temp.length > 0) {
            this.queue.push(this.temp.shift())
        }

        return pop
    }

    empty() {
        return this.queue.length == 0
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.peek()
stack.pop()