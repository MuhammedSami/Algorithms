
const MAXLENGTH = 50;

/**
* Hash tables data structures are used in compilation,caching,password,authentication etc.
* I ve user open addresing method. Chainin method have several disandvatages.
* I might did some errors of usind please let me know. 
**/
class HashTable{
	constructor(...values) {
		this.added = 0;
		this.hashStorage = this._crateArray();
		this.push(...values);
	}

	// init array
	_crateArray() {
		let arr  = {};
		for( let j=0; j < MAXLENGTH; j++ ) {
			arr[j]= "";
		}
		return arr;
	}

	// push value into array
	push(...values) {
		values.forEach( value => this._controlAscii(value));
	}

	isFull() {
		if( this.added === MAXLENGTH) {
			alert("its full");
			return false;
		}
	}

	/**
	  Meta utf*8 needed for character converting
	**/
	_allCharacterToEng(value) {
		let charMap = {
	       	'Ç': 'C',
	       	'Ö': 'O',
	       	'Ş': 'S',
	      	'İ': 'I',
	      	'I': 'i',
	      	'Ü': 'U',
	      	'Ğ': 'G',
	      	'ç': 'c',
	      	'ö': 'o',
	      	'ş': 's',
	      	'ı': 'i',
	      	'ü': 'u',
	      	'ğ': 'g'
	    };

	    let newVal  ="";
	    for( let c =0; c < value.length; c++ ) {
	    	if( typeof charMap[value[c]] != "undefined" ) {
	    		newVal += charMap[value[c]];
	    	}
	    	else{
	    		newVal += value[c];
	    	}
	    }

	    return newVal;
	}

	/**
	* We will add a value to the given position in array
	* And We use open addresing method
	**/
	addToPosition(index,value) {
		this.isFull();

		let done = false;

		// if atİndex is empty
		if( this.hashStorage[index] === "" ) {
			this.hashStorage[index] = value;
			done = true;
		}else {
			for( let t=(index+1); t< MAXLENGTH; t++) {
				if( this.hashStorage[t] === "" && done === false){
					this.hashStorage[t] = value;
					done = true;
					break;
				} 
			}
		}

		// İf it stil could not insert data
		if( done === false ) {
			for ( let k = 0; k < index; k++) {
				if( this.hashStorage[t] === "" && done === false) {
					this.hashStorage[t] = value;
					done = true;
					break;
				}
			}
		}
	}

	_find(value) {
		let result = this._calculateAsci(value);
		let found  = false;

		if( this.hashStorage[result[0]] === result[1] ) {
			return this.hashStorage[result[0]]; 
			found = true;
		}
		else if( this.hashStorage[result[0]] === "" ) {
			found = false;
			return "empty";
		}
		else{
			for (let f = result[0]; f < MAXLENGTH; f++ ) {
				if( this.hashStorage[f] === "" ){
					return "empty";
					break;
				}
				if( this.hashStorage[f] === result[1] ) {
					found = true;
					return this.hashStorage[f];
					break;
				}

			}
			return this.hashStorage[result[0]];
		}
	}

	_calculateAsci(value) {
		let totalAscii = 0;
		let reminder   = 0;
		
		value = this._allCharacterToEng(decodeURIComponent(value));
		
		for( let i=0; i<value.length; i++ ) {
			totalAscii += value[i].charCodeAt(0);
		}
		// reminder known index
		reminder = totalAscii % MAXLENGTH;

		return [reminder,value];
	}

	_controlAscii(value) {
		
		let result = this._calculateAsci(value);
		this.addToPosition(result[0],result[1]);
		console.log(this.hashStorage);
	}
}

let hash = new HashTable('Mia','Muhammed','Yasin','Kamil','aşşşç','Yasin');

var a = hash._find('asdasd');
console.log(a);