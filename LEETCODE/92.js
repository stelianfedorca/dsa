/***
 * Given the head of a singly linked list and two integers left and right where left <= right,
 *  reverse the nodes of the list from position left to position right, and return the reversed list.
 */

class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
  }
}

const initializeLinkedListFromArray = array => {
  let head = new ListNode(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    const newNode = new ListNode(array[i]);
    current.next = newNode;
    current = current.next;
  }

  return head;
};

const reverseBetween = function (head, left, right) {
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

  // console.log(leftPreviousNode.data);
  // console.log(head.data);

  rightCurrentPosition = leftCurrentPosition;

  let prevNode = null;
  let tempNode = null;

  while (rightCurrentPosition <= right) {
    // reverse the linked list
    tempNode = head;
    head = head.next;
    tempNode.next = prevNode;
    prevNode = tempNode;
    rightCurrentPosition++;
  }

  console.log(head);

  // console.log(prevNode);

  leftPreviousNode.next = tempNode;

  return tempNode;
};

// const linkedList = initializeLinkedListFromArray([1, 2, 3, 4, 5]);

// reverseBetween(linkedList, 2, 4);

console.log();
