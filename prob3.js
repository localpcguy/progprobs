'use strict';

function fib(cur, last, cnt) { 
	var tmp = cur || 1; 
	last = last || 0; 
	cur = cur || 0; 
	cnt = cnt || 1; 

	//console.log(cnt, last); 
	if (cnt >= 100) { return cnt + ': ' +  last; } 

	cur = cur + last; 
	last = tmp; 
	cnt++; 


	return fib(cur, last, cnt); 
}

module.exports = {
	fib: fib
};