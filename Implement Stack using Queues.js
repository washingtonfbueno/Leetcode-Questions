class MyStack {
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        let q = [...this.queue];
        for (let index = 0; index < q.length; index++) {
            if (index < q.length - 1) {
                this.queue.shift();
                this.queue.push(q[index]);
            }
        }

        return this.queue.shift();
    }

    top() {
        return this.queue.at(-1);
    }

    empty() {
        return this.queue.length == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
