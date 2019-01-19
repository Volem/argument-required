// Type definitions for argument-required 1.0.2
// Project: argument-required
// Definitions by: Volkan Nazmi Metin https://github.com/volem

/**
 * Throws an error if argument array doesn't contain truthy values in the order given by argumentNames
 */
export interface ArgumentsFunction {
	/**
	 * @param argumentArray Any type of arguments that needs to be checked for existance
	 */
	(...argumentArray: any[]): void;
}

/**
 * Name of the arguments that needs to be checked in the given order.
 * @param argumentNames String array for the name of the arguments
 */
export function required(...argumentNames: string[]) : ArgumentsFunction;