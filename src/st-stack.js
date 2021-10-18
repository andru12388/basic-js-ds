const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
	constructor(...items){
    this._items = []
  }

  push(...items){
		items.forEach(item => this._items.push(item) )
		return this._items;

  }

  pop(){
    return this._items.pop()
  }

  peek(){
    return this._items[this._items.length-1]
  }

};
