
/**
* Last In Last Out
* First In First Out
* FIFO
**/
class Queue{

	constructor(...values){
		this.length = 0;
		this.queue = {};
		this.maxSize = 5;
		this.front = "";
		this.Enqueue(...values); 
	}

	// Add a single value to the end of the queue
	_singleEnqueue(val) {
		this.queue[this.length] = val;
		this.front = ( this.length === 0 ) ? this.queue[0] : "";
		this.rare  = ( this.length > 0) ? this.queue[this.length] : "";
		this.length++;
	}


	// Enqueue
	Enqueue(...values) {
		values.forEach(value => this._singleEnqueue(value));
		return this;
	}

	//Dequeue
	dequeue() {
		if( this.isEmpty() )
			return false;

		let data = this.queue[this.front];
		
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
		let  result = this.queue[this.length];
		return result;
	}

	// Return the value at the enf of the Queue
	peek() {
		return this.queue[this.length-1];
	}
}

/**
* Exercise
*
**/
const queue = new Queue(1,2,3);
console.log(queue.dequeue());