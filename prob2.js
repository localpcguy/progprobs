'use strict';

function combiner(l1, l2) { 
	var combined = []; 
	var maxlength = Math.max(l1.length, l2.length); 

	for (var i = 0; i < maxlength; i++) { 
		l1[i] && combined.push(l1[i]);
		l2[i] && combined.push(l2[i]);
	} 

	return combined; 
}

module.exports = {
	combiner: combiner
};