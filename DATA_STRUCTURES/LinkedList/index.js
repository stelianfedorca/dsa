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

  isElementPresent(data) {
    if (!this.head) return false;

    let tempNode = this.head;
    let isPresent = false;

    while (tempNode) {
      if (tempNode.data === data) {
        isPresent = true;
        break;
      }
      tempNode = tempNode.next;
    }

    return isPresent;
  }

  findIndex(data) {
    if (!this.head) return -1;

    let tempNode = this.head;
    let found = false;
    let currentIndex = 0;

    while (tempNode) {
      if (tempNode.data === data) {
        found = true;
        break;
      }
      tempNode = tempNode.next;
      currentIndex++;
    }

    return found ? currentIndex : -1;
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseBetween = function (head, left, right) {
  console.log('head: ', head);
  let leftCurrentPosition = 1;
  let rightCurrentPosition = 1;
  let dummy = new ListNode(0);
  dummy.next = head;
  let leftPreviousNode = head;

  // get the node before node at the left position

  while (leftCurrentPosition < left - 1) {
    leftPreviousNode = head;
    head = head.next;
    leftCurrentPosition++;
  }

  rightCurrentPosition = leftCurrentPosition;

  let prevNode = null;
  let tempNode = null;

  while (rightCurrentPosition < right) {
    // reverse the linked list
    tempNode = head;
    head = head.next;
    tempNode.next = prevNode;
    prevNode = tempNode;
    rightCurrentPosition++;
  }

  console.log(tempNode);

  // leftPreviousNode.next = tempNode;

  // return tempNode;
};

function print(head) {
  let arr = [];
  let tempNode = head;

  while (tempNode) {
    console.log(tempNode);
    arr.push(tempNode.data);
    tempNode = tempNode.next;
  }

  console.log(arr);
}

let mergeTwoLists = function (l1, l2) {
  const tempNode = new Node(0);
  let currentNode = tempNode;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }

    currentNode = currentNode.next;
  }

  if (!l1) currentNode.next = l2;
  else currentNode.next = l1;

  return tempNode.next;
};

const linkedList = new LinkedList();
linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);
linkedList.addToEnd(4);
linkedList.addToEnd(5);

reverseBetween(linkedList, 2, 4);
// // linkedList.print();

// const linkedList2 = new LinkedList();

// linkedList2.addToEnd(1);
// linkedList2.addToEnd(3);
// linkedList2.addToEnd(4);

// let n1 = new Node(10);
// let n2 = n1;
// console.log(n1);
// console.log(n2);

// n2 = n2.next;

// console.log(n2);
// console.log(n1);

// linkedList2.print();

// const merged = mergeTwoLists(linkedList, linkedList2);
// console.log('-------------------');
// print(merged);

// console.log(linkedList.isElementPresent(11));

// console.log(linkedList.findIndex(2));

// linkedList.print();
// linkedList.reverse();
// linkedList.print();

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
