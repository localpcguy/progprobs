'use strict';

function forloop(nums) { 
	var total = 0; 
	
	for (var i = 0; i < nums.length; i++) { 
		total += nums[i]; 
	} 
	
	return total;
}

function whileloop(nums) { 
	var total = 0; 
	var numnums = nums.length; 

	while(numnums--) { 
		total += nums[numnums]; 
	} 

	return total; 
}

function recloop(nums, total) { 
	total = total || 0; 

	if (!nums.length) { 
		return total; 
	} 

	total += nums.shift();	 

	return recloop(nums, total); 
}

module.exports = {
	forloop: forloop,
	whileloop: whileloop,
	recloop: recloop
};