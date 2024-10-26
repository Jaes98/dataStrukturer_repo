class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.tail = null;
    this.count = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.tail;
    this.tail = newNode;
    this.count++;
  }

  pop() {
    const prev = this.tail;
    this.tail = prev.next;

    return prev; // returnerer noden som blev fjernet
  }

  peek() {
    return this.tail;
  }

  size() {
    return this.count;
  }

  get(index) {
    let currentIndex = 0;
    let current = this.tail;

    while (currentIndex < index) {
      currentIndex++;
      if (current == null) {
        return;
      }
      current = current.next;
    }

    return current;
  }
}
