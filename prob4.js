'use strict';

function largest(nums) {
	nums = nums || [0];

	function cmpr(a,b) {
		a += '';
		b += '';
		return (a + b) > (b + a) * 1;
	}
	
	return nums.sort(cmpr).reverse().join('') * 1;
}

module.exports = {
	largest: largest
};