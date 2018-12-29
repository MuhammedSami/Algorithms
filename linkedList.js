/**
*	Linear time Algorithm
*  	Beacause i tdepends on the size of object	
**/
class LinkedList{
	constructor(...values){
		this.head = null;
		this.length = 0;
		this.addToHead(...values);
	}

	_addSinleItemToHead(value) {
		const newNode = { value };
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	addToHead(...values) {
		values.forEach(value => this._addSinleItemToHead(value));
		return this;
	}

	removeFromHead() {
		if( this.length === 0) {
			return undefined;
		}

		const value = this.head.value;
		this.head   = this.head.next;
		this.length--;

		return value;
	}

	find(val) {
		let thisNode = this.head;

		while(thisNode) {
			if( thisNode.value === val) {
				return thisNode;
			}
			thisNode = thisNode.next;
		} 
	}

	remove(val) {

		if( this.length === 0 ){
			return undefined;
		}

		if( this.head.value === val ) {
			this.removeFromHead();
			return this;
		}

		let previousNode = this.head;
		let thisNode = previousNode.next;

		while (thisNode) {
			if( thisNode.value === val){
				break;
			}
			previousNode = thisNode;
			thisNode = thisNode.next;
		}

		if(thisNode === null) {
			return undefined;
		}

		previousNode.next = thisNode.next;
		this.length--;
		return this;
	}

	getFromIndex( index ) {
		console.log(this.length);
		if( this.length === 0 || index > this.length ){
			return undefined;
		}

		if( index === 1){
			return this.head.value;
		}

		let thisNode = this.head;
		let NodeIndex = 1;
		while ( thisNode ) {
			if( NodeIndex === index ) {
				return thisNode.value;
			}
			NodeIndex++;
		}
	}

	addAtIndex( index, val ){
		if( this.length === 0 ) {
			return undefined;
		}

		if( index === 1 ){
			this.addToHead(val);
			return this;
		}

		let thisNode = this.head;
		let NodeIndex2 = 1;
		let NodeToMove;
		let NodeToadd;
		let changed = 0;
		
		while ( thisNode ) {
			if( index >= NodeIndex2 ) {

				NodeToadd = ( NodeIndex2 === index ) ? val

				NodeToMove 	   = thisNode.value;
				thisNode.value = NodeToadd;
				thisNode.next  = NodeToMove;

			}
			thisNode = thisNode.next;
			NodeIndex2++;
		}
	}
}

const list = new LinkedList('first','seconde','third');
const found = list.find('second');
const removed = list.remove('fourth');
list.addAtIndex(2,'test');
const Index = list.getFromIndex(4);

