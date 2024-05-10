/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null, children = []) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // if the tree is empty, return 0
    if (!this.root) return 0;
    // create a var to track the depth of the tree
    let depth = 1;
    // create a queue to keep track of the nodes
    let queue = [this.root];
    // while the queue is not empty
    while(queue.length) {
      // create a var to access current node
      let current = queue.shift();
      // check if the current node has children
      if (current.left || current.right) {
        // if it does, increment the depth
        depth++;
        // add the children to the queue
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
      else {
        // if the current node does not have children, return the depth
        return depth;
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // if the tree is empty, return 0
    if (!this.root) return 0;
    // create a var that stores the largest depth
    let deepest = 0;
    // create a stack to keep track of the nodes
    let stack = [{node: this.root, depth: 1}];
    // while the stack is not empty
    while(stack.length) {
      // create a var to access current node
      let current = stack.pop();
      // create vars for the current node and depth
      let {node, depth} = current;
      // check if depth is larger than the deepest
      if (depth > deepest) {
        // if it is, set deepest to depth
        deepest = depth;
      }
      // check if the current node has children
      if (node.left || node.right) {
        // if it does, add the children to the stack
        if (node.left) stack.push({node: node.left, depth: depth + 1});
        if (node.right) stack.push({node: node.right, depth: depth + 1});
      }
    }
    return deepest;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // create max sum var to keep track of the largest sum, set to negative infinity
    let maxSum = 0;
    // dfs helper function
    function dfs(node) {
      // if the node is null, return 0
      if (!node) return 0;
      // recursively call dfs on the left and right nodes
      let left = Math.max(dfs(node.left), 0);
      let right = Math.max(dfs(node.right), 0);
      // update the max sum and return
      maxSum = Math.max(maxSum, node.val + left + right);
      return Math.max(0, left, right) + node.val;
    }
    // call dfs on the root
    dfs(this.root);
    // return the max sum
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // if the tree is empty, return null
    if (!this.root) return null;
    // create var to store the next larger value
    let nextLarger = null;
    // create a queue to keep track of the nodes
    let queue = [this.root];
    // while the queue is not empty
    while(queue.length) {
      // create a var to access current node
      let current = queue.shift();
      // check if the current node is larger than the lower bound
      if(current.val > lowerBound) {
        // if it is, check if the next larger value is null or if the current node is smaller than the next larger value
        if (nextLarger === null || current.val < nextLarger) {
          // if it is, set the next larger value to the current node
          nextLarger = current.val;
        }
      }
      // check if the current node has children
      if (current.left || current.right) {
        // if it does, add the children to the queue
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
    return nextLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
