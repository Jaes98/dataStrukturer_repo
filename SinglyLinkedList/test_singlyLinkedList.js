import SinglyLinkedList from "./singlyLinkedList.js";

const list = new SinglyLinkedList();

// Tilføjer nogle nodes
list.addInBeginning(10);
list.addInBeginning(20);
list.addInBeginning(30);

console.log("Vis listen efter at have tilføjet 3 noder:");
list.dumpList();

console.log("Størrelse af listen:", list.size());

console.log("Første node:", list.getFirstNode());

console.log("Sidste node:", list.getLastNode());

console.log("Node af 20:", list.getNodeWith(20));

console.log("Fjerner den første node");
list.removeFirstNode();
console.log("Vis listen efter at have fjernet den første node:");
list.dumpList();


console.log("Fjerner den sidste node");
list.removeLastNode();
console.log("Vis listen efter at have fjernet den sidste node:");
list.dumpList();

console.log("Tilføjer en node med værdi 40 i begyndelsen");
list.addInBeginning(40);
console.log("Vis listen efter at have tilføjet noden:");
list.dumpList();

console.log("Fjerner node med værdi 20");
list.remove(20);
console.log("Vis listen efter at have fjernet noden med værdi 20:");
list.dumpList();

console.log("Størrelse af listen:", list.size());
