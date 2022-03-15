# type-inference

Infer JavaScript types from a string


## Installation

npm:

```bash
npm install --save @giancarl021/type-inference
```

Yarn:

```bash
yarn add @giancarl021/type-inference
```

## Usage

First, import the library:

```javascript
const infer = require('@giancarl021/type-inference');
```

Then you can use the imported function to infer the type of a string input:

```javascript
const numberType = infer('-12.345'); // -12.345
const nullType = infer('null'); // null
const booleanType = infer('true'); // true
const escapedString = infer('"null"'); // 'null'
```

## Tests

If you want to test the library, you can run the tests by running the following commands on the root of the project:

npm:
```bash
npm install
npm test
```

Yarn:
```bash
yarn
yarn test
```