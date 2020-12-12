class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
}
class Stack {
  constructor() {
    this.stack = new Queue();
    this.top = -1;
  }
  splice(index) {
    let queueSplice = new Queue();
    for (let i = 0; i <= this.top; i++) {
      if (i == index) {
        this.stack.dequeue();
      } else {
        queueSplice.enqueue(this.stack.dequeue());
      }
    }
    this.top--;
    this.stack = queueSplice;
  }
  push(item) {
    this.stack.enqueue(item);
    this.top++;
  }
  pop() {
    let queue = new Queue();
    let result = null;
    for (let i = this.top; i > -1; i--) {
      if (i !== 0) {
        queue.enqueue(this.stack.dequeue());
      } else {
        result = this.stack.dequeue();
        this.stack = queue;
        this.top--;
      }
    }
    return result;
  }
}
let stack2 = new Stack();
stack2.push(2);
console.log(stack2);
