function getHammingDistance(string str1, string str2){
//This function returns the number of different characters in the same position of str1 and str2 
	var str1len = st1.length; //gets the length of str1
	var str2len = st2.length; //gets the length of str2
	//hammingDistance of two strings is the number of characters that differ
	//in ith position from position 1 to the the length of the strings - 1.
	var hammingDistance=0; //initializes to 0
  
	if (str1len != str2len){ //if the length of the strings are not equal
		alert("Error! Strings are not equal."); //prompts an error message
	}
	else{ //else if the length of the strings are equal
		for (var i=0; i <str1len; i++){
			if (str1[i] != str2[i]){ //compares the different characters in the same position
				hammingDistance++; //increments the hammingdistance
			}
		}
		return hammingDistance; //returns the hamming distance
	}
}

//----------------------------------------------------------------------------------------------------
function countSubstrPattern(string original, string pattern){
//This function counts the occurrence of pattern in the original string
	var patternOccurrence=0;
	var numOfSameChar=0;

	for (var i=0; var<original.length; i++){
		for (var j=0, k=i; j<pattern.length; j++){
			//counts and compare the number of same characters of original and pattern strings
			if (original[k] == pattern[j]){
				numOfSameChar++;
			}
			k++; //moves to next char of original string
		}
		//if the pattern is found starting from index i of the original
		if (numOfSameChar == pattern.length){
			patternOccurrence++; //increments the number of occurrence
		}		
	}
	return patternOccurrence; //returns the num of occurrence of pattern in original string
}

//----------------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------------------
function getSkew(string str, int n){ //returns an integer
//Given a genome str of some length q (where q>0), it returns the number of Gs minus the number of Cs
//in the first n nucleotides (q>=n). The value can be zero, negative or positive. The first position is
//one (1) not zero(0) as we typically associate with string implementations. (description from the handout)  
	var G = 0; //variable for counting the number of G's from index 0 to index n-1
	var C = 0; //variable for counting the number of C's from index 0 to index n-1
	
	//increments the number of G's or C's if they are found in str
	for (var i=0; i<n; i++){
		if (str[i]=='G'){
			G++;
		}else if (str[i]=='C'){
			C++;
		}
	}
	return G-C; //returns number of G's minus C's
}

//----------------------------------------------------------------------------------------------------
function getMaxSkewN(string str, int n){ //returns an integer
//Given a genome str of some length q (where q>0), it returns the maximum value of the number of Gs minus the
//number of Cs in the first n nucleotides (q>=n). The value can be zero, negative or positive. The first position
//is one (1) not zero(0) as we typically associate with string implementations. (description from the handout)
getMaxSkewN(“GGCCAC”, 1) returns 1
getMaxSkewN(“GGCCAC”, 2) returns 2
getMaxSkewN(“GGCCAC”, 3) returns 2
getMaxSkewN(“GGCCAC”, 4) returns 2
getMaxSkewN(“GGCCAC”, 5) returns 2 
	max=0;
	for (var i=0; i<n; i++){
		
		
	}
	

}

//----------------------------------------------------------------------------------------------------
function getMinSkewN(string str, int n){ //returns an integer
//Given a genome str of some length q (where q>0), it returns the minimum value of the number of Gs minus the
//number of Cs in the first n nucleotides (q>=n). The value can be zero, negative or positive. The first position
//is one (1) not zero(0) as we typically associate with string implementations. (description from the handout)


}



