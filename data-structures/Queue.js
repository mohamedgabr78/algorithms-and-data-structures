// Queue is also an abstract data type or a linear data structure
//  just like stack data structure in which the first element is inserted from one end called the REAR(also called tail)
//  and the removal of existing element takes place from the other end called as FRONT(also called head).
// This makes queue as FIFO(First in First Out) data structure
//  which means that element inserted first will be removed first.
class Queue {
  constructor() {
    this.queue = [];
  }
  push(item) {
    this.queue.push(item);
  }
  pop() {
    return this.queue.shift();
    // this will return the last element we just deleted
  }
}
let q = new Queue();
q.push(2);
q.push("a");
q.push("b");
q.push("c");
q.push("d");
q.pop(); // >> equal=2
q.pop(); // >> equal='a'
