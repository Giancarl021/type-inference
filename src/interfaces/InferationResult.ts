import type { TypeMap, TypeMapKey } from '../util/typeMap.js';
import ToNumber from './ToNumber.js';

type InferationResult<T extends string> = T extends ''
    ? undefined
    : T extends `"${infer DoubleQuotedString}"`
      ? DoubleQuotedString
      : T extends `'${infer SingleQuotedString}'`
        ? SingleQuotedString
        : T extends TypeMapKey
          ? TypeMap[T]
          : ToNumber<T> extends number
            ? ToNumber<T>
            : T;

export default InferationResult;
