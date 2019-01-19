module.exports = (...argumentName) => (...argumentArray) => {
	argumentName.forEach(function (name, index) {
		if (!argumentArray[index]) {
			const error = new Error(`Argument required : ${name}`);
			error.name = 'ArgumentRequiredError';
			throw error;
		}
	});
};