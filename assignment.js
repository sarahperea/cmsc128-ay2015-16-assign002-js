function getHammingDistance(string str1, string str2){
  var str1len = st1.length;
  var str2len = st2.length;
  //hammingDistance of two strings is the number of characters that differ
  //in ith position from position 1 to the the lenght of the strings - 1.
  var hammingDistance=0;
  
  if (str1len != str2len) alert("Error! Strings are not equal.");
  else{
    for (var i=0; i <str1len; i++){
      if (str1[i] != str2[i]){
        hammingDistance++;
      }
    }
    return hammingDistance;
  }

}

int countSubstrPattern(string original, string pattern){}

bool isValidString(string str, string alphabet){}

int getSkew(string str, int n){}

int getMaxSkewN(string str, int n){}

int getMinSkewN(string str, int n){

}



