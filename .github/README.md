# type-inference

![](assets/logo.png)

Infer JavaScript primtive types from a string value

## Why?

A separate package for simple primitive type inference allows the re-use of the code for more complex applications.

## Usage

> **Important:** From version `1.0`, this package supports only NodeJS with version 20 or later, and uses ES Modules exclusively.

This package can be downloaded from [NPM](https://www.npmjs.com/package/@giancarl021/type-inference).

The package exports a single function:

```typescript
import inferType from '@giancarl021/type-inference';

const myInferedNumber = inferType('10');
```
