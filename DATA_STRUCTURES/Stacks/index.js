class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const tempNode = this.first;
      this.first = newNode;
      this.first.next = tempNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const tempNode = this.first;

    if (!tempNode.next) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return tempNode;
  }

  display() {
    let tempNode = this.first;
    const arr = [];

    while (tempNode) {
      arr.push(tempNode.data);
      tempNode = tempNode.next;
    }

    return arr;
  }
}

const stack = new Stack();
stack.push(33);
stack.push(11);
stack.push(2);
stack.push(1);

console.log(stack.display());
stack.pop();
console.log(stack.display());
stack.pop();
console.log(stack.display());
