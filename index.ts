import typeMap from './src/util/typeMap.js';

import type InferationResult from './src/interfaces/InferationResult.js';
import type { TypeMapKey } from './src/util/typeMap.js';

export default function inferType<T extends string>(
    input: T
): InferationResult<T> {
    // Input must be a string for inference
    if (typeof input !== 'string') throw new Error('Input is not a string');

    // On empty string return `undefined`
    if (!input) return typeMap.undefined as InferationResult<T>;

    // Check if the input is enclosured on `'` or `"`, treat as string
    if (
        (input.startsWith('"') && input.endsWith('"')) ||
        (input.startsWith("'") && input.endsWith("'"))
    )
        return input.slice(1, -1) as InferationResult<T>;

    // Static values, such as `true` or `false` will immediatly return from a type map
    if (typeMap.hasOwnProperty(input))
        return typeMap[input as TypeMapKey] as InferationResult<T>;

    // Check if the value can be a number with the `Number` constructor
    const possibleNumber = Number(input);

    // If the value returns a valid number (not a `NaN`), the number is returned
    if (!isNaN(possibleNumber)) return possibleNumber as InferationResult<T>;

    // If everything fails, return the original string as a `string`
    return input as unknown as InferationResult<T>;
}

export { InferationResult };
