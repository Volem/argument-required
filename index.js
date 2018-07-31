'use strict';
module.exports = (...argumentName) => (...argumentArray) => {
	argumentName.forEach(function (name, index) {
		if (!argumentArray[index]) {
			throw new Error(`Argument error : ${name}`);
		}
	});
};