// complete the given function

function palindrome(str){
	let n= str.length;
	int start=0, end=n-1;
	while(start<=end){
		if(str.charAt(start)!==str.charAt(end)){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
