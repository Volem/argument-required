module.exports = (...argumentName) => (...argumentArray) => {
	argumentName.forEach(function (name, index) {
		if (argumentArray[index] === undefined || argumentArray[index] === null || argumentArray[index] === '') {
			const error = new Error(`Argument required : ${name}`);
			error.name = 'ArgumentRequiredError';
			throw error;
		}
	});
};