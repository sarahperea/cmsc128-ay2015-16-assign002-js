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
