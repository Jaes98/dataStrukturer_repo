import {Tree, Node} from "./tree.js";

function testTree() {
  const tree = new Tree();

  // Test adding values
  tree.addValue(1);
  console.log(tree);
  tree.addValue(2);
  console.log(tree);
  tree.addValue(3);
  console.log(tree);
  tree.addValue(4);
  console.log(tree);
  tree.addValue(5);
  console.log(tree);

  console.log("Root should have 4 children:", tree.root.childAmount === 4);
  console.log(
    "First child value should be 2:",
    tree.root.childNodes[0].value === 2
  );

  // Finding values
  const node = tree.findValue(3);
  console.log("Node with value 3 should be found:", node !== null);
  console.log("Found node value should be 3:", node && node.value === 3);

  // Removing values
  tree.removeValue(3);
  console.log(
    "Node with value 3 should be removed:",
    tree.findValue(3) === null
  );
  console.log(
    "Root should have 3 children after removal:",
    tree.root.childAmount === 3
  );

  // Replacing child nodes
  const newNode = new Node(6);
  tree.root.replaceChild(newNode, tree.root.childNodes[0]);
  console.log(
    "First child value should be replaced with 6:",
    tree.root.childNodes[0].value === 6
  );

  console.log(
    "Node with value 2 should be removed after replacement:",
    tree.findValue(2) === null
  );
}

testTree();
