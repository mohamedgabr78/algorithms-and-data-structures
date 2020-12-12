// A stack implementation typically contains three methods, which as push pop and peek
// Push will allow the user to put a single item onto the stack
// Peek allows the user to see what value is on top of the stack
// and pop allows the user to remove the top value from the stack
// Stack is a LIFO(Last in First out) structure

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1; // to present index of elements in stack array
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
  splice(index) {
    this.stack.splice(index, 1);
  }
  peek() {
    return this.stack[this.top];
    // this will return the last in the array which will pop next or make what you want with
  }
}
let stack2 = new Stack();
stack2.push(2);
stack2.push("a");
stack2.push("b");
stack2.pop();
stack2.pop();
stack2.peek();
