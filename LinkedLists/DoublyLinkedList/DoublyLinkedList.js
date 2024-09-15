export default class DoublyLinkedList {
  head;
  tail;
  constructor(node = null) {
    this.head = node;
    this.tail = node;
  }

  addLast(data) {

  }

  addFirst(data) {
  
  }

  get() {

  }

  indexOf(data) {

  }

  insertAfter( data, after) {
  }

  insertBefore(data, before) {
  }

  first() {

  }

  last() {

  }

  remove(data) {

  }

  removeIndex(index) {

  }

  removeFirst() {

  }

  removeLast() {

  }

  getNode(index) {

  }

  addNodeLast(node) {
  }

  addNodeFirst(node) {
  }

  insertAfterNode(node, after) {
  }

  insertBeforeNode(node, before) {
  }

  removeNode(node) {
  }

  nodeAt(index) {
  }

  swapNodes(node1, node2) {
  }

  clear() {
  }

  size() {
  }

  dumpList() {
  }

  getNextNode(node) {
  }

  getPreviousNode(node) {
  }

  

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