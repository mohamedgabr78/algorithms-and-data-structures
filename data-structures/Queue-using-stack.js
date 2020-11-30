class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
    // we made this array as a stack structure which will follow LIFO approach(Last in First Out).
    // this top represent the index of elements in the array
  }
  push(item) {
    this.stack.push(item);
    this.top++;
  }
  pop() {
    if (this.top < 0) return undefined;
    this.top--;
    return this.stack.pop();
  }
}
class Queue {
  constructor() {
    this.queue = new Stack();
    // now we make this queue array but we will deal with it lika a stack one (LIFO)
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    // imagin we have a three bags in bag(named queue) and we want to remove the last ong
    // we will pick the first and put it somewhere(i named it tempStack)
    // and pick the second and put it in (tempStack) and remove the third one
    // now we will go to tempStack and bring bags back (-_^)
    let tempStack = new Stack();
    let fR = null;
    for (let i = 0; i < this.queue.top; i++) {
      if (this.queue.top > 0) {
        tempStack.push(this.queue.pop());
      } else {
        fR = this.queue.pop();
      }
    }
    for (let i = 0; i < tempStack.top; i++) {
      this.queue.push(tempStack.pop());
    }
    return fR;
  }
}
let queue = new Queue();
