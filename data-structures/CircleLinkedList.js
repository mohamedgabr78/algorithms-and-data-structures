function linkedList() {
  let head = null;
  let length = 0;

  let Node = function (el) {
    this.el = el;
    this.next = null;
  };
  this.size = function () {
    return length;
  };
  this.head = function () {
    return head;
  };
  this.add = function (el) {
    let node = new Node(el);
    if (head === null) {
      head = node;
      head.next=head
    } else {
      let currentNode = head;
      while (currentNode.next !== head) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.next=head
    }
    length++;
  this.remove = function (el) {
    let currentNode = head;
    let previousNode;
    if (currentNode.el === el) {
      head = currentNode.next;
    } else {
      while (currentNode.el !== el) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };
}
let try1 = new linkedList();
try1.add2(1);
try1.add2(2);
try1.add2(3);
try1.add2(5);
try1.add2(7);
try1.add2(1.5);
try1.add2(6);
console.log(try1.size());
console.log(JSON.stringify(try1.head()));

//&& currentNode.next !== null
