module.exports = function (input) {
    if (typeof input !== 'string') throw new Error('input is not a string');

    if (!input.length) return input;

    if (
        input.startsWith('"') && input.endsWith('"') ||
        input.startsWith("'") && input.endsWith("'")
    ) return input.slice(1, -1);

    if (input === 'null') return null;
    if (input === 'undefined') return undefined;
    if (input === 'true') return true;
    if (input === 'false') return false;
    if (input === 'NaN') return NaN;

    const n = Number(input);
    if (!isNaN(n)) return n;

    return input;
}