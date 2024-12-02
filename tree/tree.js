class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.childNodes = [];
  }

  get firstChild() {
    return this.childNodes[0];
  }

  get lastChild() {
    return this.childNodes[this.childNodes.length - 1];
  }

  get childAmount() {
    return this.childNodes.length;
  }

  hasChildNodes() {
    return this.childNodes.length > 0;
  }

  appendChild(child) {
    child.parent = this;
    this.childNodes.push(child);
  }

  removeChild(child) {
    const index = this.childNodes.indexOf(child);
    if (index !== -1) {
      this.childNodes.splice(index, 1);
      child.parent = null;
    }
  }

  replaceChild(newChild, oldChild) {
    const index = this.childNodes.indexOf(oldChild);
    if (index !== -1) {
      this.childNodes[index] = newChild;
      newChild.parent = this;
      oldChild.parent = null;
    }
  }
}

class Tree {
  constructor(value) {
    this.root = value ? new Node(value) : null;
  }

  dump() {
    if (this.root) {
      let output = "";
      const recursiveDump = (node, depth = 0) => {
        output += `${"  ".repeat(depth)}- ${node.value}\n`;
        node.childNodes.forEach((child) => recursiveDump(child, depth + 1));
      };
      recursiveDump(this.root);
      console.log(output);
    } else {
      console.log("Tree is empty");
    }
  }

  addValue(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      const queue = [this.root];
      while (queue.length) {
        const current = queue.shift();
        if (current.childAmount < 4) {
          // Maximum children per node is 4
          current.appendChild(newNode);
          return;
        }
        queue.push(...current.childNodes);
      }
    }
  }

  findValue(value) {
    if (!this.root) return null;
    const recursiveFind = (node) => {
      if (node.value === value) return node;
      for (const child of node.childNodes) {
        const found = recursiveFind(child);
        if (found) return found;
      }
      return null;
    };
    return recursiveFind(this.root);
  }

  removeValue(value) {
    const nodeToRemove = this.findValue(value);
    if (nodeToRemove) {
      if (nodeToRemove.parent) {
        nodeToRemove.childNodes.forEach((child) =>
          nodeToRemove.parent.appendChild(child)
        );
        nodeToRemove.parent.removeChild(nodeToRemove);
      } else if (nodeToRemove.hasChildNodes()) {
        const newRoot = nodeToRemove.firstChild;
        nodeToRemove.removeChild(newRoot);
        nodeToRemove.childNodes.forEach((child) => newRoot.appendChild(child));
        newRoot.parent = null;
        this.root = newRoot;
      } else {
        this.root = null;
      }
    } else {
      console.log("Doesnt exist in the tree");
    }
  }
}

module.exports = { Tree, Node };
