
/**
* Last In First Out
* LIFO
**/
class Stack{

	constructor(...values){
		this.length = 0;
		this.storage = {};
		this.maxSize = 5;
		this.push(...values); 
	}

	// Add a single value onto the end of the stack
	_pushSingle(val){
		this.storage[this.length] = val;
		this.length++;
	}

	// Add multiple 
	push(...values) {
		values.forEach(value => this._pushSingle(value));
		return this;
	}
	// if is full
	isFull() {
		return ( this.length === this.maxSize );
	}

	// Check if empty
	isEmpty() {
		return ( this.length === 0 );
	}

	// Remove and return value
	pop() {
		this.isEmpty();
		
		this.length--;
		let  result = this.storage[this.length];
		return result;
	}

	// Size of the stack
	getSize() {
		return this.length;
	}

	// Return the value at the enf of the stack
	peek() {
		return this.storage[this.length-1];
	}
}

/**
* Exercise
*
**/
const stack = new Stack(1,2,3);
console.log(stack.peek());