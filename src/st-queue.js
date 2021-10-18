const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

	constructor() {
	this.value = null;
	this.next = null;
	}

  getUnderlyingList() {
    return this.next.next
  }

  enqueue(value) {
		let nodeNew = new ListNode(value);
		if (this.next === null) {
			this.next = nodeNew;
		}
	
		let node = this.next;
		while (node.next != null) {
			node = node.next;
		}
		node.next = new ListNode(value)
  }

  dequeue() {
    let start = this.next;
		if (!start) {
			return null;
		} else {
			let value = start.next.value;
			start.next = start.next.next;
			return value;
		}
  }

}