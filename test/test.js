'use strict';
const validator = require('../index');
const assert = require('assert');

describe('argument-required', function () {
	it('should validate arguments successfully', function () {
		assert.doesNotThrow(() => validator('test1', 'test2', 'test3')(1, 2, 3), 'throwed an argument error');
	});
	it('should fail on missing arguments', function () {
		assert.throws(() => validator('test1', 'test2')(1), 'not throwed an argument error');
		assert.throws(() => validator('test1')(), 'not throwed an argument error');
	});
	it('should not throw w/o argument name list', function () {
		assert.doesNotThrow(() => validator()(), 'not throwed an argument error');
	});
});