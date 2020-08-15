/** Stack Implementation. */
class Stack {
  constructor() {
    /* Internal list to hold stack items. */
    this.list = [];
  }

  /**
   * Remove all items in the stack.
   */
  clear() {
    this.list = [];
    console.log(`The stack has been cleared.`);
  }

  /**
   * Return a copy of the topmost item in the stack.
   * @return Top item in the stack.
   */
  peek() {
    /* Stack is empty, nothing to see. */
    if (this.list <= 0) return console.log(`Stack is empty.`);

    /* Return a copy of the last item. */
    console.log(`Top of stack: ${this.list[this.list.length - 1]}`);
    return this.list[this.list.length - 1];
  }

  /**
   * Remove the topmost item in the stack.
   * @return Top item in the stack.
   */
  pop() {
    /*  Stack has something to pop, pop and print message. */
    if (this.list.length > 0) {
      const last = this.list[this.list.length - 1];
      this.list.length = this.list.length - 1;
      console.log(`Popped ${last}.`);
    }

    /* Nothing to pop */
    return `The stack is empty.`;
  }

  /**
   * Push an item on top of the stack.
   * @param New item to push.
   */
  push(newItem) {
    /* Nothing to push to stack, exit. */
    if (!newItem) return;

    /* Push new item onto the stack. */
    this.list[this.list.length] = newItem;
    console.log(`Pushed ${newItem}.`);
  }

  /**
   * Print items in the stack vertically.
   */
  size() {
    console.log(`Stack size is ${this.list.length}`);
    return this.list.length;
  }

  /**
   * Print items in the stack vertically.
   */
  view() {
    /* Display all items in internal array from the end. */
    console.log(`\nStack`);
    console.log(`-----`);
    for (let i = this.list.length - 1; i >= 0; i--) {
      console.log(this.list[i]);
    }
    console.log(`-----\n`);
  }
}

/* Testing stack functions. */
let stack = new Stack();
//stack.view();
stack.push(10);
stack.push(20);
stack.push(80);
stack.push(30);
stack.peek();
stack.size();
stack.view();
stack.pop();
stack.size();
stack.view();
// stack.clear();
// stack.view();
stack.peek();
stack.view();
