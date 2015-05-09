'use strict';

var numbers = [1,2,3,4,5,6,7,8,9];
var target = 100;
var possibilities = Math.pow(3, numbers.length-1);

String.prototype.repeat = function(str, padding) {
	var paddedStr = "";
	for (var i = 0; i < padding; i++) {
		paddedStr += str;
	}
	return paddedStr;
};

function getPaddedBase3String(number, padding) {
	return ("0".repeat(padding) + number.toString(3).split()).slice(-padding);
}
 
function getSumText(signs) {
	var sumText = numbers[0].toString();
	for (var i = 0; i < numbers.length-1; i++) {
		if (signs[i] == '1') {
			sumText += '+';
		}
		else if (signs[i] == '2') {
			sumText += '-';
		}
		sumText += numbers[i+1].toString();
	}
	return sumText;
}

function getAnswers() {
	var answers = [];
	for (var i = 0; i < possibilities; i++) {
		var sumText = getSumText(getPaddedBase3String(i, numbers.length-1).split(''));
		var sum = eval(sumText);
		if (sum === target) {
			answers.push(sumText + ' = ' + target);
		}
	}
	return answers.join('\n');
}

module.exports = {
	getAnswers: getAnswers
};

// Expected results
/*
	1+2+3-4+5+6+78+9
	1+2+34-5+67-8+9
	1+23-4+5+6+78-9
	1+23-4+56+7+8+9
	12+3+4+5-6-7+89
	12+3-4+5+67+8+9
	12-3-4+5-6+7+89
	123+4-5+67-89
	123+45-67+8-9
	123-4-5-6-7+8-9
	123-45-67+89
 */

// Current results
/*
	1+23-4+56+7+8+9
	1+23-4+5+6+78-9
	1+2+34-5+67-8+9
	1+2+3-4+5+6+78+9
 */