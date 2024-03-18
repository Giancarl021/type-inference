import { deepStrictEqual } from 'assert';
import inferType from './index.js';

import type { InferationResult } from './index.js';

const typeError = new Error('Input is not a string');

const subjects = [
    // Inferred
    'null',
    'undefined',
    'true',
    'false',
    'NaN',
    '123',
    '-123',
    '123.456',
    '-123.456',
    '1e5',
    '-1e5',
    '    100000     ',
    'Infinity',
    '-Infinity',
    // Double-quoted escaped
    '"null"',
    '"undefined"',
    '"true"',
    '"false"',
    '"NaN"',
    '"123"',
    '"-123"',
    '"123.456"',
    '"-123.456"',
    '"1e5"',
    '"-1e5"',
    '"    100000     "',
    // Single-quoted escaped
    "'null'",
    "'undefined'",
    "'true'",
    "'false'",
    "'NaN'",
    "'123'",
    "'-123'",
    "'123.456'",
    "'-123.456'",
    "'1e5'",
    "'-1e5'",
    "'    100000     '",
    // Edge cases
    null,
    undefined,
    true,
    false,
    NaN,
    123,
    -123,
    123.456,
    -123.456,
    1e5,
    -1e5,
    null,
    undefined,
    true,
    false,
    NaN,
    123,
    -123,
    123.456,
    -123.456,
    1e5,
    -1e5,
    () => {},
    [],
    {}
];

const expected = [
    // Inferred
    null,
    undefined,
    true,
    false,
    NaN,
    123,
    -123,
    123.456,
    -123.456,
    1e5,
    -1e5,
    100000,
    Infinity,
    -Infinity,
    // Double-quoted escaped
    'null',
    'undefined',
    'true',
    'false',
    'NaN',
    '123',
    '-123',
    '123.456',
    '-123.456',
    '1e5',
    '-1e5',
    '    100000     ',
    // Single-quoted escaped
    'null',
    'undefined',
    'true',
    'false',
    'NaN',
    '123',
    '-123',
    '123.456',
    '-123.456',
    '1e5',
    '-1e5',
    '    100000     ',
    // Edge cases
    ...new Array(25).fill(typeError)
];

const testsLength = subjects.length;
let passed = 0;

for (let i = 0; i < testsLength; i++) {
    const subjectItem = subjects[i];
    const expectedItem = expected[i];
    let actualItem: InferationResult<any> | Error;

    try {
        actualItem = inferType(subjectItem as any);
    } catch (error) {
        actualItem = error as Error;
    }

    try {
        deepStrictEqual(actualItem, expectedItem);
        passed++;
    } catch {
        console.error(
            `Test failed:\n  Expected: ${expectedItem}\n  Actual: ${actualItem}`
        );
    }
}

if (passed === subjects.length) {
    console.log('All tests passed successfully');
    process.exit(0);
} else {
    console.error(`${passed} of ${testsLength} tests passed`);
    process.exit(1);
}
