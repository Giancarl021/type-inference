type NoPadding<T extends string> = T extends ` ${infer LeftPad}`
    ? NoPadding<LeftPad>
    : T extends `${infer RightPad} `
      ? NoPadding<RightPad>
      : T;

type NumberSign = '+' | '-' | '';

type ToNumber<T extends string> =
    NoPadding<T> extends `${NumberSign}Infinity`
        ? number
        : NoPadding<T> extends `${infer N extends number}`
          ? N
          : never;

export default ToNumber;
