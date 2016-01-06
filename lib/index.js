'use strict';

var testFunction = function testFunction() {
	var firstName = arguments.length <= 0 || arguments[0] === undefined ? "Sina" : arguments[0];
	var lastName = arguments.length <= 1 || arguments[1] === undefined ? "Jaz" : arguments[1];

	console.log(firstName + ' ' + lastName);
};

testFunction();