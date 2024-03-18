export type TypeMap = typeof typeMap;
export type TypeMapKey = keyof TypeMap;
export type TypeMapValue = TypeMap[TypeMapKey];

const typeMap = {
    null: null,
    undefined: undefined,
    true: true,
    false: false,
    NaN: NaN
} as const;

export default typeMap;
