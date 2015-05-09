var prob1 = require('./prob1');
var prob2 = require('./prob2');
var prob3 = require('./prob3');
var prob4 = require('./prob4');
var prob5 = require('./prob5');

console.log('Prob1');
console.log('forloop([1,2,3]) =', prob1.forloop([1,2,3]));
console.log('whileloop([1,2,3]) =', prob1.whileloop([1,2,3]));
console.log('recloop([1,2,3]) =' , prob1.recloop([1,2,3]));

console.log('\nProb2');
console.log('combiner([1,2,3], [\'a\',\'b\',\'c\']) =', prob2.combiner([1,2,3], ['a','b','c']));

console.log('\nProb3');
console.log('fib() =', prob3.fib());

console.log('\nProb4');
console.log('largest([45,0,1,3,9,50]) = ', prob4.largest([45,0,1,3,9,50]));
console.log('largest([5, 50, 56]) = ', prob4.largest([5, 50, 56]));
console.log('largest([5, 2, 1, 9, 50, 56]) = ', prob4.largest([5, 2, 1, 9, 50, 56]));

console.log('\nProb5');
console.log('getAnswers() =');
console.log(prob5.getAnswers());




