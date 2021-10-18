const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

	constructor(){
    this.root2 = null;
  }


  root() {
    return this.root2;
  }

  add(data) {
    this.root2 = addData(this.root2, data);

		function addData(node, data) {
			if(node === null) {
				return new Node(data);
			}
			if(node.data === data) {
				return node;
			}
			if(data < node.data) {
				node.left = addData(node.left, data);
			} else {
				node.right = addData(node.right, data);
			}
			return node;
		};
  }
	
  has(data) {
		return hasData(this.root2, data);

		function hasData(node, data) {
			if(node === null) {
				return false;
			}
			if(node.data === data) {
				return true;
			}
			if(data < node.data) {
				return hasData(node.left, data);
			} else if(data > node.data) {
				return hasData(node.right, data);
			}
		};
		

  }

  find(data) {
    return findData(this.root2, data);

		function findData(node, data) {
			if(node === null) {
				return null;
			}
			if(node.data === data) {
				return node;
			}
			if(data < node.data) {
				return findData(node.left, data);
			} else if(data > node.data) {
				return findData(node.right, data);
			}
		};
  }

  remove(data) {
    this.root2 = removeData(this.root2, data);

		function removeData(node, data) {
			if(node === null) {
				return null;
			}
			if(data < node.data) {
				node.left = removeData(node.left, data);
				return node;
			} else if(data > node.data) {
				node.right = removeData(node.right, data);
				return node;
			} else {
				if(node.left === null && node.right === null) {
					node = null;
					return node;
				}
				if(node.left != null && node.right == null) {
					node = node.left;
					return node;
				}
				if(node.left == null && node.right != null) {
					node = node.right;
					return node;
				}
				if (node.left != null && node.right != null) {
					let minRight = node.right
					while (minRight.left != null) {
						minRight = minRight.left
					}
					node.data = minRight.data;
					node.right = removeData(node.right, minRight.data);
					return node;
				}
			}
		}
	}
  min() {
    if(this.root2 === null) {
			return;
		}
		let node = this.root2;
		while (node.left != null) {
			node = node.left
		}
		return node.data;
  }

  max() {
    if(this.root2 === null) {
			return;
		}
		let node = this.root2;
		while (node.right != null) {
			node = node.right
		}
		return node.data;
  }

}
