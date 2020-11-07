const _ = require('lodash');

const numbers = [77, 12, 45, 77, 2, 21, 90];

_.each(numbers, function (number, i) {
	console.log(number);
});
