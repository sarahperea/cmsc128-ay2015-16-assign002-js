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