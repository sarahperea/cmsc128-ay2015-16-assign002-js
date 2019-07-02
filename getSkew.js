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
