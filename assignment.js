function getMaxSkewN(string str, int n){ //returns an integer
//Given a genome str of some length q (where q>0), it returns the maximum value of the number of Gs minus the
//number of Cs in the first n nucleotides (q>=n). The value can be zero, negative or positive. The first position
//is one (1) not zero(0) as we typically associate with string implementations. (description from the handout)
	var max=0; //variable for getting the max value of G minus C
	var gMinusC; //variable for the difference of G and C 
	var G=0, C=0; //variables for the number of G's and C's
	for (var i=0; i<n; i++){
		for (var j=0; j<=i; j++){
			//counts the occurrence of G's and C's from the index 0 of str up to index n-1
			if (str[j]=='G'){ G++; }
			else if (str[j]=='C'){ C++; }
		}
		gMinusC = G - C; //gets the value of G minus C
		//replaces the value of max if gMinusC is greater than max
		if (gMinusC > max){
			max = gMinusC;
		}
		G=0; C=0;//initializes value of G and C to 0
	}
	return max; //returns the maximum value of G minus C
}

//----------------------------------------------------------------------------------------------------
function getMinSkewN(string str, int n){ //returns an integer
//Given a genome str of some length q (where q>0), it returns the minimum value of the number of Gs minus the
//number of Cs in the first n nucleotides (q>=n). The value can be zero, negative or positive. The first position
//is one (1) not zero(0) as we typically associate with string implementations. (description from the handout)
	var min=10; //variable for getting the min value of G minus C
	var gMinusC; //variable for the difference of G and C 
	var G=0, C=0; //variables for the number of G's and C's
	for (var i=0; i<n; i++){
		for (var j=0; j<=i; j++){
			//counts the occurrence of G's and C's from the index 0 of str up to index n-1
			if (str[j]=='G'){ G++; }
			else if (str[j]=='C'){ C++; }
		}
		gMinusC = G - C; //gets the value of G minus C
		//replaces the value of max if gMinusC is greater than max
		if (gMinusC < min){ //
			min = gMinusC;
		}
		G=0; C=0; //initializes value of G and C to 0
	}
	return min; //returns the minimum value of G minus C
}



