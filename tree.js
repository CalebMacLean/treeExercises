/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if the tree is empty, return 0
    if(!this.root) return 0;
    // create a var to store the sum of the values
    let sum = 0;
    // create a stack to keep track of the nodes
    let stack = [this.root];
    // while the stack is not empty
    while(stack.length) {
      // create a var to access current node
      let current = stack.pop();
      // add the value of the current node to the sum
      sum += current.val;
      // add the children of the current node to the stack
      for (let child of current.children) {
        stack.push(child);
      }
    }
    
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if tree is empty return 0
    if (!this.root) return 0;
    // create a var to store the count of even nodes
    let count = 0;
    // create a stack to keep track of the nodes
    let stack = [this.root];
    // while the stack is not empty
    while(stack.length) {
      // create a var to access current node
      let current = stack.pop();
      // check if the current node is even
      if (current.val % 2 === 0) {
        // if it is, increment the count
        count++;
      }
      // add the children of the current node to the stack
      for (let child of current.children) {
        stack.push(child);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // if tree is empty return null;
    if (!this.root) return 0;
    // create a var to store the count of nodes greater than lowerBound
    let count = 0;
    // create a stack to keep track of the nodes
    let stack = [this.root];
    // while the stack is not empty
    while(stack.length) {
      // create a var to access current node
      let current = stack.pop();
      // check if the current node is greater than lowerBound
      if (current.val > lowerBound) {
        // if it is, increment the count
        count++;
      }
      // add the children of the current node to the stack
      for (let child of current.children) {
        stack.push(child);
      }
    }
    
    return count;
  }
}

module.exports = { Tree, TreeNode };
