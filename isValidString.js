function isValidString(string str, string alphabet){
//This function returns true if the string str is a valid string based on the letters of alphabet
	for (var i=0; i<alphabet.length; i++){
		for (var j=0; j<str.length; j++){
			if (str[j] != alphabet[i]){ //if a character in str is not found in alphabet
				return false; //returns false
			}
		}
	}
	return true; //returns true if all alphabet are found in str
}

