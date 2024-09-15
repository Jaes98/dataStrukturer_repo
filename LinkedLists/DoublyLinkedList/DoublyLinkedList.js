export default class DoublyLinkedList {
  head;
  tail;
  constructor(node = null) {
    this.head = node;
    this.tail = node;
  }

  addLast(data) {
    const newNode = new Node(data);
    this.addNodeLast(newNode);
  }
  addFirst(data) {
    const newNode = new Node(data);
    this.addNodeFirst(newNode);
  }
  get(index) {
    return this.getNode(index).data;
  }

  indexOf(data) {
    let node = this.head;
    let index = 0;
    while (node) {
      if (node.data === data) {
        return index;
      }
      index++;
      node = node.next;
    }
    return -1;
  }

  insertAfter(index, data) {
    const preExisting = this.nodeAt(index);
    if (preExisting) {
      this.insertAfterNode(new Node(data), preExisting);
    } else {
      console.log("no node found at the index");
      return;
    }
  }

  insertBefore(index, data) {
    const preExisting = this.nodeAt(index);
    if (preExisting) {
      this.insertBeforeNode(new Node(data), preExisting);
    } else {
      console.log("no node found at the index");
      return;
    }
  }

  first() {
    return this.head;
  }

  last() {
    return this.tail;
  }

  remove(data) {
    const node = this.getNodeWith(data);
    if (node) {
      this.removeNode(node);
    } else {
      console.log("no node found with the data");
      return;
    }
  }

  removeIndex(index) {}

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
      this.head.prev = null
      }
    }

  removeLast() {
    if (this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  getNode(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  addNodeLast(node) {}

  addNodeFirst(node) {}

  insertAfterNode(node, after) {}

  insertBeforeNode(node, before) {}

  removeNode(node) {}

  nodeAt(index) {}

  swapNodes(node1, node2) {}

  clear() {
    this.head = null;
    this.tail = null;
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  dumpList() {
    let node = this.head;
    while (node) {
      console.log("Node: ", node);
      node = node.next;
    }
  }

  getNextNode(node) {}

  getPreviousNode(node) {}
}

export class Node {
  prev;
  next;
  data;
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}