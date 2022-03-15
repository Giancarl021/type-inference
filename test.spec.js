const { deepStrictEqual } = require('assert');
const infer = require('./index');

const typeError = new Error('input is not a string');

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
    // Edge cases
    ...new Array(25).fill(typeError)
];

const actual = subjects.map(s => {
    try {
        return infer(s);
    } catch (err) {
        return err;
    }
});

try {
    deepStrictEqual(actual, expected);
    console.log('✅ All tests passed!');
} catch (err) {
    console.log('❎ Tests failed!');
    console.error(err.message);
}