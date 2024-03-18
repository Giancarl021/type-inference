import typeMap, { TypeMapKey, TypeMapValue } from './src/typeMap.js';

export type InferationResult = TypeMapValue | number | string;

export default function inferType(input: string): InferationResult {
    // Input must be a string for inference
    if (typeof input !== 'string') throw new Error('Input is not a string');

    // On empty string return `undefined`
    if (!input.length) return typeMap.undefined;

    // Check if the input is enclosured on `'` or `"`, treat as string
    if (
        (input.startsWith('"') && input.endsWith('"')) ||
        (input.startsWith("'") && input.endsWith("'"))
    )
        return input.slice(1, -1);

    // Static values, such as `true` or `false` will immediatly return from a type map
    if (typeMap.hasOwnProperty(input)) return typeMap[input as TypeMapKey];

    // Check if the value can be a number with the `Number` constructor
    const possibleNumber = Number(input);

    // If the value returns a valid number (not a `NaN`), the number is returned
    if (!isNaN(possibleNumber)) return possibleNumber;

    // If everything fails, return the original string as a `string`
    return input;
}
