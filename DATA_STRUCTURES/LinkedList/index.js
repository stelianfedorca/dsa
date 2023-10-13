class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removeFromEnd() {
    if (this.length === 0 || !this.head) return undefined;

    let tempNode = this.head;
    let preNode = tempNode;

    while (tempNode.next !== null) {
      preNode = tempNode;
      tempNode = tempNode.next;
    }

    preNode.next = null;
    this.tail = preNode;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return tempNode.data;
  }

  removeFromBeginning() {
    if (!this.head) return undefined;

    let tempNode = this.head;
    this.head = this.head.next;
    this.length--;

    return tempNode;
  }

  addToBeginning(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  getAtIndex(index) {
    if (index < 0 || index >= this.length || !this.head) return null;

    let counter = 0;
    let tempNode = this.head;

    while (counter !== index) {
      tempNode = tempNode.next;
      counter++;
    }

    return tempNode;
  }

  updateAtIndex(index, data) {
    const foundNode = this.getAtIndex(index);

    if (!foundNode) return false;

    foundNode.data = data;
    return true;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) this.addToEnd(data);
    if (index === 0) this.addToBeginning(data);

    const newNode = new Node(data);

    let counter = 0;
    const previousIndex = index - 1; // the index before the searched index
    let tempNode = this.head;

    while (counter !== previousIndex) {
      tempNode = tempNode.next;
      counter++;
    }

    newNode.next = tempNode.next;
    tempNode.next = newNode;
    this.length++;

    return true;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.length) return undefined;
    // last element
    if (index === this.length - 1) {
      // this.removeFromEnd();
      if (!head) return undefined;

      let tempNode = this.head;
      let previousNode = tempNode;

      while (tempNode.next !== null) {
        previousNode = tempNode;
        tempNode = tempNode.next;
      }

      previousNode.next = null;
      this.tail = previousNode;
      this.length--;
    }

    // first element
    if (index === 0) {
      if (!this.head) return undefined;

      let tempNode = this.head;
      this.head = tempNode.next;
      this.length--;
    }

    // otherwise remove element at specified index

    // get the element before the one at the specified index
    const previousIndex = index - 1;
    let current = 0;
    let prevNode = this.head;

    while (current !== previousIndex) {
      prevNode = prevNode.next;
      current++;
    }

    let nodeToRemove = prevNode.next;

    let afterNode = nodeToRemove.next;
    prevNode.next = afterNode;
    this.length--;
    return nodeToRemove.data;
  }

  reverse() {
    let tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;

    let prevNode = null;
    let nextNode;
    let currentNode = tempNode; // head

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
  }

  traverse() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  print() {
    let arr = [];
    let tempNode = this.head;

    while (tempNode) {
      arr.push(tempNode.data);
      tempNode = tempNode.next;
    }

    console.log(arr);
  }
}

const linkedList = new LinkedList();
linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);
linkedList.addToEnd(4);
linkedList.addToEnd(5);

linkedList.print();
linkedList.reverse();
linkedList.print();

// linkedList.traverse();

// linkedList.insertAtIndex(2, 99);
// linkedList.insertAtIndex(4, 888);

// linkedList.traverse();

// linkedList.removeAtIndex(2);

// console.log('------------');
// linkedList.traverse();

// linkedList.traverse();

// linkedList.addToBeginning('A');
// console.log('after adding to beginning=======');

// linkedList.traverse();

// console.log('node at index: 1: ', linkedList.getAtIndex(1));

// linkedList.updateAtIndex(1, 'something else');

// linkedList.traverse();
