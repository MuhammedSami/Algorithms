
const HEAP_SIZE=15;

class Heap{
	
	constructor(...values){
		this.length = 0;
		this.heap   = [null]; 
    this.swap   = 0;
		this._push(...values);
	}

	_push(...values) {
		values.forEach(value => this._insert(value));
	}

  _insert(num) {
    this.heap.push(num);
    this.length++;

    if( this.length > 2 ) {
      
      this._bublesort();
    }
  }

  _bublesort() {
    let index = this.heap.length-1;

    while( this.heap[index] < this.heap[Math.floor(index/2)] ) {
      this.swap++;
      if( index >= 1 ) {
        [this.heap[Math.floor(index/2)],this.heap[index]] = [this.heap[index],this.heap[Math.floor(index/2)]];
        if( Math.floor(index/2) > 1 ) {
          index = Math.floor(index/2);
        } else {
          break;
        }
      }
    }
    console.log("Swapped "+this.swap+" time");
    console.log(this.heap);
  }

  // the minimal value will be removed
  _remove() {
      let smallest = this.heap[1];

      if( this.length > 2 ) {
        this.heap[1] = this.heap[this.length-1];
        this.heap.splice(this.length-1);
        if( this.length === 3 ) this._bublesort();

        this._rightLeftBalance();
      } else if ( this.heap.length == 2 ) {
        this.heap.splice(1, 1);
      } else {
        return null;
      }
      console.log("sa",this.heap);
      return smallest;
  }

  _rightLeftBalance() {

      let index     = 1;
      let leftNode  = 2 * index;
      let rightNode = 2 * index + 1;

      while( this.heap[index] > this.heap[leftNode] || this.heap[index] > this.heap[rightNode] ) {
        if( this.heap[leftNode] < this.heap[rightNode] ) {
          [this.heap[index], this.heap[leftNode]] = [this.heap[leftNode], this.heap[index]]
          index = 2 * index;
        } else {
          [this.heap[index] ,this.heap[rightNode]] = [this.heap[rightNode], this.heap[index]];
           index = 2 * index + 1;
        }

        let left = 2 * index;
        let right = 2 * index +1;
        if( this.heap[left] === "undefined" || this.heap[right] === "undefined" ) {
          break;
        }
      } 
  }

}

let h = new Heap(3,6,1,4,15,78,100,0);
// it may not work properly added for now. 
var a = h._remove();
console.log(a);

