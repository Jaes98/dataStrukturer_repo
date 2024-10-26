import Stack from "./stack.js";

function testStack() {
  const stack = new Stack();

  stack.push(1);
  console.log(stack);
  stack.pop();

  stack.push(2);
  stack.push(3);

  console.log(stack);
  console.log(stack.size());
  console.log(stack.get(5));

}

testStack();
